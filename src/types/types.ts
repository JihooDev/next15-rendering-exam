export type TMovie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type TMovieDetail = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: TCollection | null;
    budget: number;
    genres: TGenre[];
    homepage: string;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: TProductionCompany[];
    production_countries: TProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: TSpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

// 하위 타입 정의
export type TCollection = {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
};

export type TGenre = {
    id: number;
    name: string;
};

export type TProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

export type TProductionCountry = {
    iso_3166_1: string;
    name: string;
};

export type TSpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
};


