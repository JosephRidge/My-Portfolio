# [Vue 3 + Vite](https://vitejs.dev/guide/#trying-vite-online)

installation :
`$ npm create vite@latest`

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

# [Tailwind CSS](https://tailwindcss.com/docs/guides/vite)

* `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`

Tailwind.config.js

* `module.exports = { content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ], theme: { extend: {}, }, plugins: [], }`

# Formatter

Prettier Package : 
* `npm install --save-dev --save-exact prettier `

Create a config file for Prettier :
* `echo {}> .prettierrc.json`

Set up Eslint :
Install :
* `npm install --save-dev eslint eslint-plugin-vue `

Configure ESlint ( *create .elintrc.js* ) :
*  `$echo {}> .eslintrc.js` with the Configuration below
* `'module.exports = {
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
}'`

Turn off conflicting ESlint config rules that would affect Prettier, by installing eslint-config-prettier :
* `npm install eslint-config-prettier --save-dev `

Configuration at .eslintrc.js
* ` extends: [ 'eslint:recommended', "plugin:vue/vue3-recommended", "prettier" ],`
the above configuration should be tghe last thing defined in th extends array

in *Package.json* add the following under scripts:
* `"lint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",`
* `"format": "prettier . --write"`


Configure Format on Save : 
![Screenshot at 2022-03-20 00-38-08](https://user-images.githubusercontent.com/42699812/159139212-e03f3b2a-9f0a-4ba8-9ff1-1c1fb0b05571.png)


Ability to run on / test using external device not local host :
This is achieved through running vite --host, however this can not be run directly hence in the package.json file under  the scripts object alter the dev value from '`vite`' to `'vite --host'`
```
"scripts": {
    "dev": "vite --host ",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
    "format": "prettier .  --write"
  },
```

# Vue Router Setup
Installing using npm  : `npm install vue-router@4 --save`
* Import createRouter in the main.js file : `import { createRouter,createWebHashHistory } from "vue-router";`

*  Create Routes and an instance of the routes 
```
const routes = [
  { path: "/", component: HomePage },
  { path: "/home", component: HomePage },
  { path: "/projects", component: ProjectsDone },
  { path: "/blog", component: Blog },
  { path: "/about", component: About },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
```
# Errors : 
![Screenshot at 2022-03-20 00-49-43](https://user-images.githubusercontent.com/42699812/159139535-aed71b43-0a9c-49f0-bcbf-116490e0d9fd.png)

## Solution : 
* `git remove -v` 

* `git remote set-url origin https://github.com/{{yourUserName}}/{{YourRepoName}}.git/`


# Usefull Links : 
* [Setting up your Code formatter - Prettier by kiran.jasvanee-Medium](https://medium.com/@kiran.jasvanee/prettier-auto-formatting-in-visual-studio-code-beab1c026b13) 

* [Setting Up a formatter and a linter](https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/)