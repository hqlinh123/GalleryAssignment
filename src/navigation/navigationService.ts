import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackParamList} from './types';

export const navigationRef =
  createNavigationContainerRef<RootStackParamList<keyof RootStackParamList>>();

export function navigate<T extends keyof RootStackParamList>(
  name: T,
  ...params: RootStackParamList[T] extends undefined
    ? []
    : [RootStackParamList[T]]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, ...(params as any));
  }
}

export function push<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList<T>,
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export function pop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(1));
  }
}

export function popCount(count: number) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
}

export function popToRoot() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
}

export function reset<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList<T>,
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name, params}],
      }),
    );
  }
}
