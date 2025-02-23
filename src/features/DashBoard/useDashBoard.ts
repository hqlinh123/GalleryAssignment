import usePositions from '@hooks/usePositions';
import { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getPhotos } from '../gallery/gallerySaga';
import { runOnJS, useDerivedValue } from 'react-native-reanimated';

const useDashBoard = () => {
    const dispatch = useDispatch();
    const listPhotos = useSelector((state: RootState) => state.gallery.listPhotos) || [];
    const { positions, arr } = usePositions(listPhotos);
    const [page, setPage] = useState(1);
    const [refresh, setRefresh] = useState(false);
    const hasRefreshed = useRef(false);
    const [, setForceRender] = useState(0);

    // ✅ Use useDerivedValue to safely track positions.value updates
    const uiPositions = useDerivedValue(() => positions.value, []);

    useEffect(() => {
        if (!hasRefreshed.current) {
            hasRefreshed.current = true;
            setRefresh(true);
            setForceRender(prev => prev + 1); // ✅ Force re-render safely
        }
    }, [uiPositions]); // ✅ Listen to safe derived value, not positions.value

    useEffect(() => {
        dispatch(getPhotos({ params: { page: 1, per_page: 10 } }));
    }, [dispatch]);

    useEffect(() => {
        runOnJS(console.log)('🖼 UI Received uiPositions:', uiPositions.value);
    }, [uiPositions]); // ✅ Logs only when uiPositions updates

    // ✅ Load more data when scrolling down
    const loadMorePhotos = useCallback(() => {
        const nextPage = page + 1;
        setPage(nextPage);
        dispatch(getPhotos({ params: { page: nextPage, per_page: 10 } }));
    }, [dispatch, page]);

    return {
        listPhotos: arr,
        positions,
        loadMorePhotos,
        refresh,
    };
};

export default useDashBoard;
