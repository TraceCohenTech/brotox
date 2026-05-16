import "server-only";
import { Article, ArticleSection, articles as baseArticles } from "./articles-extra2";
import { extraArticles4 } from "./articles-extra4";
import { extraArticles5 } from "./articles-extra5";
import { extraArticles6 } from "./articles-extra6";
import { extraArticles7 } from "./articles-extra7";
import { extraArticles8 } from "./articles-extra8";
import { extraArticles9 } from "./articles-extra9";
import { extraArticles10 } from "./articles-extra10";
import { extraArticles11 } from "./articles-extra11";
import { extraArticles12 } from "./articles-extra12";

export type { Article, ArticleSection };
export const articles: Article[] = [...baseArticles, ...extraArticles4, ...extraArticles5, ...extraArticles6, ...extraArticles7, ...extraArticles8, ...extraArticles9, ...extraArticles10, ...extraArticles11, ...extraArticles12];
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
