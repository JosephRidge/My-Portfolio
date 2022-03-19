# Vue 3 + Vite

installation :
`$ npm create vite@latest`

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

# Tailwind CSS

`npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`

Tailwind.config.js

`module.exports = { content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ], theme: { extend: {}, }, plugins: [], }`

# Formatter

Prettier Package : `npm install --save-dev --save-exact prettier `

Create a config file for Prettier :
`echo {}> .prettierrc.json`

Set up Eslint :
Install :
`npm install --save-dev eslint eslint-plugin-vue `
Configure ESlint :
create .elintrc.js : `└──╼ $echo {}> .eslintrc.js` with the Configuration below
'module.exports = {
env: {
node: true,
},
extends: [
'eslint:recommended',
'plugin:vue/vue3-recommended',
],
rules: {
// override/add rules settings here, such as:
// 'vue/no-unused-vars': 'error'
}
}'

Turn off conflicting ESlint config rules that would affect Prettier, by installing eslint-config-prettier :
`npm install eslint-config-prettier --save-dev `

Configuration at .eslintrc.js
`//.eslintrc.js extends: [ 'eslint:recommended', "plugin:vue/vue3-recommended", "prettier" ],`
th abpve configuration should be tghe last thing defined in th extends array

in `Package.json` add the fllowing under scripts:
"lint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
"format": "prettier . --write"


Configure Format on Save : 
![Screenshot at 2022-03-20 00-38-08](https://user-images.githubusercontent.com/42699812/159139212-e03f3b2a-9f0a-4ba8-9ff1-1c1fb0b05571.png)




# Errors : 
![Screenshot at 2022-03-20 00-49-43](https://user-images.githubusercontent.com/42699812/159139535-aed71b43-0a9c-49f0-bcbf-116490e0d9fd.png)

## Solution : 
git remove -v
git remote set-url origin https://github.com/{{yourUserName}}/{{YourRepoName}}.git/