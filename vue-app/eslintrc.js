// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  overrides: [
    {
      files: ['src/components/default.vue'],  // Change this to default.vue path
      rules: {
        'vue/multi-word-component-names': 'off',
    	"no-mixed-spaces-and-tabs": 0, // disable rule
	"parser": "@babel/eslint-parser",
      }
    }
  ]
}
