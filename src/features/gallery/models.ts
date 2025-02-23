import { IActionCallback } from '../../utils/models';

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

export type GetPhotosPayload = {
    params: {
        page: number;
        per_page: number;
    };
} & IActionCallback;

export type SaveListPhotosResponse = {
    listPhotos: Photo[];
} & IActionCallback;
