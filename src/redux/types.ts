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
  
  export type FetchListPhotosRequestAction = {
    type: 'gallery/fetchListPhotosRequest';
    payload: number; // page number
  };
  
  export type SearchPhotosRequestAction = {
    type: 'gallery/searchPhotosRequest';
    payload: string; // search query
  };
  
  export type UpdateListPhotosAction = {
    type: 'gallery/updateListPhotos';
    payload: Photo[];
  };
  
  export type SetSearchResultsAction = {
    type: 'gallery/setSearchResults';
    results: Photo[];
  };
  
  export type FetchListPhotosFailedAction = {
    type: 'gallery/fetchListPhotosFailed';
    message: string;
  };
  
  export type SearchPhotosFailedAction = {
    type: 'gallery/searchPhotosFailed';
    message: string;
  };
  
  export type GalleryActionTypes =
    | FetchListPhotosRequestAction
    | SearchPhotosRequestAction
    | UpdateListPhotosAction
    | SetSearchResultsAction
    | FetchListPhotosFailedAction
    | SearchPhotosFailedAction;
  