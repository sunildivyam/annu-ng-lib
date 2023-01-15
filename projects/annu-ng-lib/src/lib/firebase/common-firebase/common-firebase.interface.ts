// StructuredQuery Interfaces and enums for firestore

export enum StructuredQueryDirectionEnum {
    DIRECTION_UNSPECIFIED = 'DIRECTION_UNSPECIFIED',
    ASCENDING = 'ASCENDING',
    DESCENDING = 'DESCENDING',
}

export enum StructuredQueryOperatorEnum {
    OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED',
    AND = 'AND',
    LESS_THAN = 'LESS_THAN',
    LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
    GREATER_THAN = 'GREATER_THAN',
    GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
    EQUAL = 'EQUAL',
    NOT_EQUAL = 'NOT_EQUAL',
    ARRAY_CONTAINS = 'ARRAY_CONTAINS',
    IN = 'IN',
    ARRAY_CONTAINS_ANY = 'ARRAY_CONTAINS_ANY',
    NOT_IN = 'NOT_IN',
    IS_NAN = 'IS_NAN',
    IS_NULL = 'IS_NULL',
    IS_NOT_NAN = 'IS_NOT_NAN',
    IS_NOT_NULL = 'IS_NOT_NULL',
}

export enum StructuredQueryValueType {
    nullValue = 'nullValue',
    booleanValue = 'booleanValue',
    integerValue = 'integerValue',
    doubleValue = 'doubleValue',
    timestampValue = 'timestampValue',
    stringValue = 'stringValue',
    bytesValue = 'bytesValue',
    referenceValue = 'referenceValue',
    geoPointValue = 'geoPointValue',
    arrayValue = 'arrayValue',
    mapValue = 'mapValue',
};

export interface StructuredQueryLatLng {
    latitude: number;
    longitude: number;
}

export interface StructuredQueryArrayValue {
    values: Array<StructuredQueryValue>;
}

export interface StructuredQueryMapValue {
    fields: object;
}

export interface StructuredQueryValue {
    nullValue?: null;
    booleanValue?: boolean;
    integerValue?: number;
    doubleValue?: number;
    timestampValue?: string;
    stringValue?: string;
    bytesValue?: string;
    referenceValue?: string;
    geoPointValue?: StructuredQueryLatLng;
    arrayValue?: StructuredQueryArrayValue;
    mapValue?: StructuredQueryMapValue;
};

export interface StructuredQueryCollectionSelector {
    collectionId: string;
    allDescendants?: boolean;
}

export interface StructuredQueryFieldReference {
    fieldPath: string;
}

export interface StructuredQuerySelectProjection {
    fields: Array<StructuredQueryFieldReference>
}

export interface StructuredQueryCompositeFilter {
    op: StructuredQueryOperatorEnum;
    filters: Array<StructuredQueryFilter>;
}

export interface StructuredQueryFieldFilter {
    field: StructuredQueryFieldReference;
    op: StructuredQueryOperatorEnum;
    value: StructuredQueryValue;
}

export interface StructuredQueryUnaryFilter {
    op: StructuredQueryOperatorEnum;
    field: StructuredQueryFieldReference;
}

export interface StructuredQueryFilter {
    compositeFilter?: StructuredQueryCompositeFilter;
    fieldFilter?: StructuredQueryFieldFilter;
    unaryFilter?: StructuredQueryUnaryFilter;
}

export interface StructuredQueryOrder {
    field: StructuredQueryFieldReference;
    direction: StructuredQueryDirectionEnum;
}

export interface StructuredQueryCursor {
    values: Array<StructuredQueryValue>;
    before: boolean;
}


export interface StructuredQueryType {
    select?: StructuredQuerySelectProjection,
    from: Array<StructuredQueryCollectionSelector>,
    where?: StructuredQueryFilter,
    orderBy?: Array<StructuredQueryOrder>,
    startAt?: StructuredQueryCursor,
    endAt?: StructuredQueryCursor,
    offset?: number,
    limit?: number,
    limitToLast?: number
}

export interface StructuredQuery {
    structuredQuery: StructuredQueryType
}
