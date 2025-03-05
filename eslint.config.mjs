export default [
  {
    plugins: {
      next: require('eslint-plugin-next'),
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'next/no-html-link-for-pages': 'off',
    },
  },
];
