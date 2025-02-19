import DashBoard from '../features/DashBoard';
import {SCREEN_KEY} from './initScreens';

// 🔹 Main Screens
export const MainStackScreens = [
  {
    name: SCREEN_KEY.DASH_BOARD,
    component: DashBoard,
  },
] as const;
