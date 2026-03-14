export declare type TApiResponse = {
    Search: Array<TApiSearch>;
    totalResults: string;
    Response: string;
    Error: string;
}

export declare type TApiSearch = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string;
}