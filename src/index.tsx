import { NativeModules } from 'react-native';

type SharesdkWrapType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SharesdkWrap } = NativeModules;

export default SharesdkWrap as SharesdkWrapType;
