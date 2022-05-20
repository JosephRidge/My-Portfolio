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


# Adding Firebase tool
* `npm install firebase`

*Error* enocuntered amid download : 
![Screenshot at 2022-05-08 13-47-15](https://user-images.githubusercontent.com/42699812/167292586-271ae506-f11b-4905-a809-a6fbd5672193.png)

`npm install -g firebase-tools`
![Screenshot at 2022-05-20 01-14-48](https://user-images.githubusercontent.com/42699812/169413181-b21b9fb9-f253-4675-bf8c-9c78e9a0f4af.png)

`firebase login`

![Screenshot at 2022-05-20 01-23-25](https://user-images.githubusercontent.com/42699812/169414148-51d20bbb-bef9-42cb-a9a6-78cc21978517.png)

![Screenshot at 2022-05-20 01-25-24](https://user-images.githubusercontent.com/42699812/169414262-13fbb412-bcdc-4660-857f-6e8fa6e0c8a3.png)

## Solution 
![Screenshot at 2022-05-08 14-05-05](https://user-images.githubusercontent.com/42699812/167293246-e5fdf7da-390c-49b2-9031-d945d8ffa8f3.png)


# Firebase Hosting 
`npm install -g firebase-tools`

- update node first to the latest version as firebase may not work with older verison 
![update node](https://user-images.githubusercontent.com/42699812/169412067-99bb6049-327b-48f5-8e86-06869594aa6d.png)



# Usefull Links : 
* [Setting up your Code formatter - Prettier by kiran.jasvanee-Medium](https://medium.com/@kiran.jasvanee/prettier-auto-formatting-in-visual-studio-code-beab1c026b13) 

* [Setting Up a formatter and a linter](https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/)

* [Firebase with Vuejs](https://learnvue.co/2021/06/a-vue-firebase-authentication-tutorial-vue-3-and-firebase/#firebase-authentication-in-vue)