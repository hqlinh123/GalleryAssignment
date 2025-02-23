import { getOrder, getPosition, MARGIN } from '@utils/positions';
import React, { ReactNode } from 'react';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    SharedValue,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

// Định nghĩa kiểu dữ liệu cho props
interface DraggableProps {
    children: ReactNode;
    positions: SharedValue<Record<string, number>>;
    id: number;
}

const Draggable: React.FC<DraggableProps> = ({ children, positions, id }) => {
    const position = getPosition(positions.value[id]);
    const translateX = useSharedValue(position.x);
    const translateY = useSharedValue(position.y);
    const isGestureActive = useSharedValue(false);
    useAnimatedReaction(
        () => positions.value[id],
        newOrder => {
            const newPositions = getPosition(newOrder);
            translateX.value = withTiming(newPositions.x);
            translateY.value = withTiming(newPositions.y);
        },
    );

    const panGesture = Gesture.Pan()
        .onBegin(() => {
            isGestureActive.value = true;
        })
        .onUpdate(evt => {
            translateX.value = position.x + evt.translationX;
            translateY.value = position.y + evt.translationY;

            const oldOrder = positions.value[id];
            const newOrder = getOrder(translateX.value, translateY.value);
            if (oldOrder !== newOrder) {
                const idToSwap = Object.keys(positions.value).find(
                    key => positions.value[key] === newOrder,
                );
                if (idToSwap) {
                    const newPositions = { ...positions.value };
                    newPositions[id] = newOrder;
                    newPositions[idToSwap] = oldOrder;
                    positions.value = newPositions;
                }
            }
        })
        .onEnd(() => {
            const destination = getPosition(positions.value[id]);
            translateX.value = withTiming(destination.x);
            translateY.value = withTiming(destination.y);
        })
        .onFinalize(() => {
            isGestureActive.value = false;
        });

    const animatedStyle = useAnimatedStyle(() => {
        const zIndex = isGestureActive.value ? 1000 : 1;
        const scale = isGestureActive.value ? 1.1 : 1;
        return {
            position: 'absolute' as const,
            margin: MARGIN * 2,
            zIndex,
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
                { scale },
            ],
        };
    });

    return (
        <Animated.View style={animatedStyle}>
            <GestureDetector gesture={panGesture}>
                <Animated.View>{children}</Animated.View>
            </GestureDetector>
        </Animated.View>
    );
};

export default Draggable;
