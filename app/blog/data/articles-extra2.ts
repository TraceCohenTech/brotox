import { Article, ArticleSection, articles as baseArticles } from "./articles-extra";
const newArticles2: Article[] = [];
export type { Article, ArticleSection };
export const articles: Article[] = [...baseArticles, ...newArticles2];
export function getArticleBySlug(slug: string): Article | undefined { return articles.find((a) => a.slug === slug); }
