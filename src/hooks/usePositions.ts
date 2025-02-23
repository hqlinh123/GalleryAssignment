import { Photo } from '@redux/types';
import { useEffect } from 'react';
import { useSharedValue, useDerivedValue, runOnUI, runOnJS } from 'react-native-reanimated';

const usePositions = (listPhotos: Photo[]) => {
    // const positions = useSharedValue<Record<string, number>>({});
    console.log('listPhotos', listPhotos.slice(0, 2));
    const arr = [0, 1, 2, 3, 4, 5, 6];
    const objectArr = Object.assign({}, ...arr.map(item => ({ [item]: item })));
    console.log('objectArr', objectArr);
    const positions = useSharedValue(objectArr);
    useEffect(() => {
        if (listPhotos.length > 0) {
            const newPositions = listPhotos.reduce((acc, _, index) => {
                acc[index] = index;
                return acc;
            }, {} as Record<string, number>);

            runOnUI(() => {
                'worklet';
                // ✅ Correct way to update Reanimated shared value
                positions.value = newPositions;
            })();
        }
    }, [listPhotos]);

    // ✅ Derived value to track updates without `.get()`
    const uiPositions = useDerivedValue(() => {
        'worklet';
        return positions.value;
    });

    // ✅ Log updated uiPositions safely
    useEffect(() => {
        runOnJS(console.log)('✅ Final uiPositions:', uiPositions.value);
    }, [uiPositions.value]);

    return { positions, arr };
};

export default usePositions;
