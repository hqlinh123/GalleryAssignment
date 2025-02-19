import DashBoard from '../features/DashBoard';
import {SCREEN_KEY} from './initScreens';

// 🔹 Tab Screens Definition
export const BottomTabScreens = [
  {
    name: SCREEN_KEY.DASH_BOARD,
    component: DashBoard,
    icon: 'home', // Icon name for tab bar
  },
] as const;
