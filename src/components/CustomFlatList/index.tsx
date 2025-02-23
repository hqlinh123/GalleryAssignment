import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import {
    FlatList,
    FlatListProps,
    ListRenderItem,
    View,
    Text,
    ActivityIndicator,
    RefreshControl,
} from 'react-native';

interface CustomFlatListProps<T> extends Omit<FlatListProps<T>, 'renderItem'> {
    data: T[];
    renderItem: ListRenderItem<T>;
    ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null;
    isRefreshing?: boolean;
    onRefresh?: () => void;
    isLoadingMore?: boolean;
    onLoadMore?: () => void;
}

export interface CustomFlatListRef {
    triggerRefresh: () => void;
    scrollToTop: () => void;
    triggerLoadMore: () => void;
}

const CustomFlatList = forwardRef<CustomFlatListRef, CustomFlatListProps<any>>(
    function CustomFlatList<T>(
        {
            data,
            renderItem,
            ListEmptyComponent,
            keyExtractor,
            isRefreshing = false,
            onRefresh,
            isLoadingMore = false,
            onLoadMore,
            ...flatListProps
        }: CustomFlatListProps<T>,
        ref: React.Ref<unknown> | undefined,
    ) {
        const listRef = useRef<FlatList<T>>(null);

        // Expose methods via ref
        useImperativeHandle(ref, () => ({
            triggerRefresh: () => {
                if (onRefresh) {
                    onRefresh();
                }
            },
            scrollToTop: () => {
                listRef.current?.scrollToOffset({ animated: true, offset: 0 });
            },
            triggerLoadMore: () => {
                if (onLoadMore) {
                    onLoadMore();
                }
            },
        }));

        return (
            <FlatList
                ref={listRef}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor || ((item, index) => index.toString())}
                ListEmptyComponent={
                    ListEmptyComponent ??
                    (() => (
                        <View style={{ alignItems: 'center', padding: 20 }}>
                            <Text>No data available</Text>
                        </View>
                    ))
                }
                refreshControl={
                    onRefresh ? (
                        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                    ) : undefined
                }
                ListFooterComponent={
                    isLoadingMore ? (
                        <View style={{ padding: 10, alignItems: 'center' }}>
                            <ActivityIndicator size="small" />
                        </View>
                    ) : null
                }
                onEndReached={onLoadMore}
                onEndReachedThreshold={0.2}
                {...flatListProps}
            />
        );
    },
);

export default CustomFlatList;
