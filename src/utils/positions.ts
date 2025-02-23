import { Dimensions } from 'react-native';

const COL = 2;
export const MARGIN = 8;
export const SIZE = Dimensions.get('window').width / COL - MARGIN;

export const getPosition = (index: number): { x: number; y: number } => {
    'worklet';
    return {
        x: (index % COL) * SIZE,
        y: Math.floor(index / COL) * SIZE,
    };
};

export const getOrder = (x: number, y: number): number => {
    'worklet';
    const row = Math.round(y / SIZE);
    const col = Math.round(x / SIZE);
    return row * COL + col;
};
