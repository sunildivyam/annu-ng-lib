import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs, getDoc, addDoc, doc, setDoc, deleteDoc, writeBatch, WriteBatch, Timestamp } from 'firebase/firestore';
import { FirebaseConfig } from '../firebase.interface';

import { Category, Article } from '../../components/cms';
import { categories, articles } from './articles-firebase.seed';

const FIREBASE_DOCS = {
  CATEGORIES: 'categories',
  ARTICLES: 'articles'
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesFirebaseService {

  constructor(private firebaseConfig: FirebaseConfig) {
    // initialize firebase
    const firebaseApp = initializeApp(this.firebaseConfig);
    console.log('firebase App', firebaseApp.name);
  }

  public async addCategory(pCategory: Category): Promise<Category> {
    const category = { ...pCategory };

    try {
      const db = getFirestore();
      const categoriesRef = collection(db, FIREBASE_DOCS.CATEGORIES);

      const categoryRef = await addDoc(categoriesRef, category);
      category.id = categoryRef.id;

      return category;
    } catch (error: any) {
      return null;
    }
  }

  public async setCategory(category: Category): Promise<Category> {
    try {
      const db = getFirestore();
      const categoriesRef = collection(db, FIREBASE_DOCS.CATEGORIES);
      const categoryRef = doc(categoriesRef, category.id);

      await setDoc(categoryRef, category);

      return category;
    } catch (error: any) {
      return null;
    }
  }

  public async deleteCategory(category: Category): Promise<boolean> {
    try {
      const db = getFirestore();
      const categoriesRef = collection(db, FIREBASE_DOCS.CATEGORIES);
      const categoryRef = doc(categoriesRef, category.id);

      await deleteDoc(categoryRef);

      return true;
    } catch (error: any) {
      return false;
    }
  }

  public async getCategory(id: string): Promise<Category> {
    try {
      const db = getFirestore();
      const querySnapshot = await getDoc(doc(db, FIREBASE_DOCS.CATEGORIES, id));
      if (!querySnapshot.exists()) {
        return null;
      }

      const category: Category = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      }

      return category;
    } catch (error: any) {
      return null;
    }
  }

  public async getCategories(): Promise<Array<Category>> {
    try {
      const db = getFirestore();
      const categoriesRef = collection(db, FIREBASE_DOCS.CATEGORIES);
      const querySnapshot = await getDocs(categoriesRef);
      const categories: Array<Category> = [];
      querySnapshot.forEach((doc) => {
        categories.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return categories;
    } catch (error: any) {
      return [];
    }
  }



  public async addArticle(article: Article): Promise<Article> {
    try {
      const db = getFirestore();
      const articlesRef = collection(db, FIREBASE_DOCS.ARTICLES);

      const articleRef = await addDoc(articlesRef, article);
      article.id = articleRef.id;

      return article;
    } catch (error: any) {
      return null;
    }
  }

  public async setArticle(article: Article): Promise<Article> {
    try {
      const db = getFirestore();
      const articlesRef = collection(db, FIREBASE_DOCS.ARTICLES);
      const articleRef = doc(articlesRef, article.id);

      await setDoc(articleRef, article);

      return article;
    } catch (error: any) {
      return null;
    }
  }

  public async deleteArticle(article: Article): Promise<boolean> {
    try {
      const db = getFirestore();
      const articlesRef = collection(db, FIREBASE_DOCS.ARTICLES);
      const articleRef = doc(articlesRef, article.id);

      await deleteDoc(articleRef);

      return true;
    } catch (error: any) {
      return false;
    }
  }

  public async getArticle(id: string): Promise<Article> {
    try {
      const db = getFirestore();
      const querySnapshot = await getDoc(doc(db, FIREBASE_DOCS.ARTICLES, id));
      if (!querySnapshot.exists()) {
        return null;
      }

      const article: Article = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      }

      return article;
    } catch (error: any) {
      return null;
    }
  }

  public async getArticles(): Promise<Array<Article>> {
    try {
      const db = getFirestore();
      const articlesRef = collection(db, FIREBASE_DOCS.ARTICLES);
      const querySnapshot = await getDocs(articlesRef);
      const articles: Array<Article> = [];
      querySnapshot.forEach((doc) => {
        articles.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return articles;
    } catch (error: any) {
      return [];
    }
  }

  /**
   * seedDatabase() - populates the database with initial data.
   * This method needs to be run only once.
   */
  public async seedDatabase(): Promise<void> {
    const db = getFirestore();
    const writeBatchRef: WriteBatch = writeBatch(db);
    const categoriesRef = collection(db, FIREBASE_DOCS.CATEGORIES);
    const articlesRef = collection(db, FIREBASE_DOCS.ARTICLES);

    categories.forEach(c => writeBatchRef.set(doc(categoriesRef), { ...c, created: Timestamp.now(), updated: Timestamp.now() }));
    articles.forEach(a => writeBatchRef.set(doc(articlesRef), { ...a, created: Timestamp.now(), updated: Timestamp.now() }));

    try {
      await writeBatchRef.commit();
      console.log('SUCCESSFUL Seeding Articles firestore')
    } catch (error: any) {
      console.log('Failed Seeding Articles firestore')
    }
  }
}
