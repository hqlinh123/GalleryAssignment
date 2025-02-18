import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, Text, TextInput, View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { useDispatch, useSelector } from 'react-redux';
import { updateListPhotos } from './gallerySlice';
import styles from './styles';
import { RootState } from '../../redux/reducers';
import { fetchListPhotosRequest, searchPhotosRequest } from '../../redux/actions';

interface Photo {
  id: string;
  urls: { small: string };
}

const GalleryComponent = () => {
  const dispatch = useDispatch();
  const { listPhotos, loading, error, hasMore, page } = useSelector(
    (state: RootState) => state.gallery
  );

  const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search query

  // Debounced search function
  const handleSearch = useCallback(
    _.debounce((query: string) => {
      dispatch(searchPhotosRequest(query)); // Dispatch search action with query
    }, 500),
    []
  );

  // Update search query and trigger search when user types
  const onSearchChange = (query: string) => {
    setSearchQuery(query);
    handleSearch(query); // Trigger search after debounce
  };

  // Fetch photos or search results based on searchQuery
  useEffect(() => {
    if (searchQuery === '') {
      dispatch(fetchListPhotosRequest(page)); // Fetch all photos when search is empty and include page number
    }
  }, [searchQuery, dispatch, page]);

  const loadMoreImages = useCallback(() => {
    if (!loading && hasMore) {
      dispatch(fetchListPhotosRequest(page)); // Load more images
    }
  }, [dispatch, loading, hasMore, page]);

  const renderItem = ({ item, index, move, moveEnd, isActive }: any) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: item.urls.small }} />
      {isActive && <Text style={styles.draggingText}>Dragging...</Text>}
    </View>
  );

  const keyExtractor = (item: Photo) => item?.id?.toString(); // Ensure the key is unique for each item

  const onDragEnd = ({ data }: any) => {
    // Dispatch an action to update the photos list order in Redux state
    dispatch(updateListPhotos(data));
  };


  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search for photos"
          value={searchQuery}
          onChangeText={onSearchChange} // Trigger search when typing
        />

        {/* Loading and Error State */}
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text style={styles.errorText}>Error: {error}</Text>}

        {/* Draggable FlatList for Reordering */}
        <DraggableFlatList
          data={listPhotos ?? []}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={2} // Change this to 2 columns
          contentContainerStyle={styles.list}
          onEndReached={loadMoreImages} // Load more when scrolled to the bottom
          onEndReachedThreshold={0.5} // Trigger load more when the list is halfway from the bottom
          getItemLayout={(data, index) => ({
            length: 150, // Height of each item (same as image height)
            offset: 150 * index, // Calculates the offset for each item
            index,
          })}
          onDragEnd={onDragEnd} // Handle the end of drag
        />
      </View>
    </SafeAreaView>
  );
};

export default GalleryComponent;
