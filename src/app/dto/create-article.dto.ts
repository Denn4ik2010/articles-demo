/**
 * Represents the model for creating a new article.
 * Used for POST request.
 */
type CreateArticleDto = {
    /**
     * Title of the article.
     */
    readonly title: string;

    /**
     * Full text of the article.
     */
    readonly text: string;

    /**
     * Author of the article.
     */
    //readonly author: string;
};

export default CreateArticleDto;
