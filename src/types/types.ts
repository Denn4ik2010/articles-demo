export interface Article {
    readonly id: number;
    title: string;
    text: string;
    author: string;
}

export type ArticleOrNone = Article | undefined;
