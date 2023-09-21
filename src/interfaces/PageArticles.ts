import { ArticleObj } from "./ArticleObj";

export interface PageArticles {
  count: string;
  next: string | null;
  previus: string | null;
  results: ArticleObj[];
}
