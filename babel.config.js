module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@api':'./src/api',
          '@features':'./src/features',
          '@localize': './src/localize',
          '@navigation':'./src/navigation',
          '@redux': './src/redux'
        },
      },
    ],
  ],
};
