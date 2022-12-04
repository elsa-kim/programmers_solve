/*

npm install --save-dev prettier
npm install --save-dev eslint-config-airbnb-base eslint-plugin-import
npm install --save-dev typescript

*/

module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'no-plusplus': 'off',
  },
};
