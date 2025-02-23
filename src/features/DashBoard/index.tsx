import Box from '@components/Box';
import Draggable from '@components/Draggable';
import { Photo } from '@redux/types';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import useDashBoard from './useDashBoard';

const DashBoard = () => {
    const { listPhotos, positions } = useDashBoard();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView scrollEnabled={true}>
                <View style={styles.wrapper}>
                    {listPhotos.map(item => (
                        <Draggable key={item} positions={positions} id={item}>
                            <Box key={item} count={item} />
                        </Draggable>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 16,
    },
});
export default DashBoard;
