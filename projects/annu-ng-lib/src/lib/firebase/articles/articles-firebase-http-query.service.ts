import { Injectable } from '@angular/core';
import { QueryConfig } from '../firebase.interface';
import {
  StructuredQuery,
  StructuredQueryArrayValue,
  StructuredQueryCollectionSelector,
  StructuredQueryCursor,
  StructuredQueryDirectionEnum,
  StructuredQueryFieldFilter,
  StructuredQueryFieldReference,
  StructuredQueryFilter,
  StructuredQueryOperatorEnum,
  StructuredQueryOrder,
  StructuredQuerySelectProjection,
  StructuredQueryType,
  StructuredQueryValue,
  StructuredQueryValueType
} from '../common-firebase/common-firebase.interface';
import { LibConfig } from '../../app-config';


@Injectable({
  providedIn: 'root'
})
export class ArticlesFirebaseHttpQueryService {

  constructor(private libConfig: LibConfig) { }


  /**
   * Description placeholder
   * @date 1/9/2023 - 10:57:14 PM
   *
   * @public
   * @param {string} collectionId
   * @param {QueryConfig} queryConfig
   * @returns {StructuredQuery}
   */
  public buildStructuredQuery(collectionId: string, queryConfig: QueryConfig): StructuredQuery {
    if (!collectionId || !queryConfig) throw new Error('Pleae provide a valid collectionId and queryConfig');
    const firestoreApiUrl = this.libConfig.firestoreBaseApiUrl;
    const collectionUrl = firestoreApiUrl.substring(firestoreApiUrl.indexOf('/projects/') + 1);
    const { userId, id, articleCategoryId, isLive, orderField, orderFieldType, isDesc, isForwardDir, startPage, pageSize, selectFields } = queryConfig || null;

    let squery: StructuredQueryType = {
      from: [{ collectionId, allDescendants: false } as StructuredQueryCollectionSelector]
    };

    if (orderField) {
      squery.orderBy = [
        {
          field: { fieldPath: orderField } as StructuredQueryFieldReference,
          direction: isDesc === true ? StructuredQueryDirectionEnum.DESCENDING : StructuredQueryDirectionEnum.ASCENDING
        } as StructuredQueryOrder
      ];
    }

    if (selectFields && selectFields.length) {
      squery.select = {
        fields: selectFields.map(field => ({ fieldPath: field }))
      } as StructuredQuerySelectProjection;
    }

    if (userId || id || articleCategoryId || isLive) {
      squery.where = {
        compositeFilter: {
          filters: [],
          op: StructuredQueryOperatorEnum.AND
        }
      }
    }

    if (userId) {
      squery.where.compositeFilter.filters.push({
        fieldFilter: {
          field: { fieldPath: 'userId' },
          op: StructuredQueryOperatorEnum.EQUAL,
          value: { stringValue: userId } as StructuredQueryValue,
        } as StructuredQueryFieldFilter
      });
    }

    if (id) {
      squery.orderBy = squery.orderBy || [];
      // A orderBy on documentId(__name__) is must, if documentId is in Filter.
      squery.orderBy.push(
        {
          field: { fieldPath: '__name__' } as StructuredQueryFieldReference,
          direction: StructuredQueryDirectionEnum.ASCENDING
        } as StructuredQueryOrder);
      if (id instanceof Array) {
        const arrayValues: Array<StructuredQueryValue> = id.map(d => ({ referenceValue: `${collectionUrl}/${collectionId}/${d}` } as StructuredQueryValue));

        squery.where.compositeFilter.filters.push({
          fieldFilter: {
            field: { fieldPath: '__name__' },
            op: StructuredQueryOperatorEnum.IN,
            value: { arrayValue: { values: arrayValues } as StructuredQueryArrayValue } as StructuredQueryValue,
          } as StructuredQueryFieldFilter
        } as StructuredQueryFilter);
      } else {
        const value: StructuredQueryValue = { referenceValue: `${collectionUrl}/${collectionId}/${id}` };

        squery.where.compositeFilter.filters.push({
          fieldFilter: {
            field: { fieldPath: '__name__' },
            op: StructuredQueryOperatorEnum.EQUAL,
            value,
          } as StructuredQueryFieldFilter
        } as StructuredQueryFilter);
      }
    }

    if (isLive === false || isLive === true) {
      squery.where.compositeFilter.filters.push({
        fieldFilter: {
          field: { fieldPath: 'isLive' },
          op: StructuredQueryOperatorEnum.EQUAL,
          value: { booleanValue: isLive } as StructuredQueryValue,
        } as StructuredQueryFieldFilter
      } as StructuredQueryFilter);
    }

    if (articleCategoryId) {
      const op = articleCategoryId instanceof Array ? StructuredQueryOperatorEnum.ARRAY_CONTAINS_ANY : StructuredQueryOperatorEnum.ARRAY_CONTAINS;
      const value: StructuredQueryValue = articleCategoryId instanceof Array ? { arrayValue: { values: articleCategoryId.map(v => ({ stringValue: v })) } } : { stringValue: articleCategoryId };

      squery.where.compositeFilter.filters.push({
        fieldFilter: {
          field: { fieldPath: 'categories' },
          op,
          value,
        } as StructuredQueryFieldFilter
      } as StructuredQueryFilter);
    }

    if (startPage) {
      if (isForwardDir === false) {
        squery.endAt = {
          values: [{ [orderFieldType]: startPage }],
          before: false
        } as StructuredQueryCursor;
      } else {
        squery.startAt = {
          values: [{ [orderFieldType]: startPage }],
          before: false
        } as StructuredQueryCursor;
      }
    }

    if (pageSize > 0) {
      squery.limit = pageSize;
    }

    return { structuredQuery: squery } as StructuredQuery;
  }

}
