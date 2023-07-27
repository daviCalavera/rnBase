module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['react-native-reanimated/plugin']],
  env: {
    production: {
      presets: ['react-optimize'],
      plugins: ['transform-remove-console', {exclude: ['error', 'warn']}],
    },
  },
};
