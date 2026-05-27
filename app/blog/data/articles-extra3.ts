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
import { extraArticles13 } from "./articles-extra13";
import { extraArticles14 } from "./articles-extra14";
import { extraArticles15 } from "./articles-extra15";
import { extraArticles16 } from "./articles-extra16";
import { extraArticles17 } from "./articles-extra17";
import { extraArticles18 } from "./articles-extra18";
import { extraArticles19 } from "./articles-extra19";
import { extraArticles20 } from "./articles-extra20";
import { extraArticles21 } from "./articles-extra21";
import { extraArticles22 } from "./articles-extra22";
import { extraArticles23 } from "./articles-extra23";
import { extraArticles24 } from "./articles-extra24";
import { extraArticles25 } from "./articles-extra25";
import { extraArticles26 } from "./articles-extra26";
import { extraArticles27 } from "./articles-extra27";
import { extraArticles28 } from "./articles-extra28";
import { extraArticles29 } from "./articles-extra29";
import { extraArticles30 } from "./articles-extra30";
import { extraArticles31 } from "./articles-extra31";

export type { Article, ArticleSection };
export const articles: Article[] = [...baseArticles, ...extraArticles4, ...extraArticles5, ...extraArticles6, ...extraArticles7, ...extraArticles8, ...extraArticles9, ...extraArticles10, ...extraArticles11, ...extraArticles12, ...extraArticles13, ...extraArticles14, ...extraArticles15, ...extraArticles16, ...extraArticles17, ...extraArticles18, ...extraArticles19, ...extraArticles20, ...extraArticles21, ...extraArticles22, ...extraArticles23, ...extraArticles24, ...extraArticles25, ...extraArticles26, ...extraArticles27, ...extraArticles28, ...extraArticles29, ...extraArticles30, ...extraArticles31];
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
