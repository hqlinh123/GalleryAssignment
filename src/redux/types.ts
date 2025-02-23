export interface Photo {
    id: string;
    urls: { small: string };
}

export interface GalleryState {
    listPhotos: Photo[];
    searchResults: Photo[];
    loading: boolean;
    error: string | null;
    hasMore: boolean;
    page: number;
}
