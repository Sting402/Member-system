# Dashcode (Node V-14)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue3-tree-org start
https://www.npmjs.com/package/vue3-tree-org
https://sangtian152.github.io/vue3-tree-org/
npm install vue3-tree-org --save
or 
yarn add vue3-tree-org

引入main.js
import { createApp } from 'vue'
import vue3TreeOrg from 'vue3-tree-org';
import "vue3-tree-org/lib/vue3-tree-org.css";

const app = createApp(App)

app.use(vue3TreeOrg)
app.mount('#app')
