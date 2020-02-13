// Описание задачи
// 1. Починить код
// 2. Добавить кнопку и функцию удаления задачи
// 3. Посмотреть на код и
// 3.1. Перечислить, что бы вы сделали по-другому
// 3.2. [опционально] Переписать код как душа просит
// Комментарии по ошибкам можно писать прямо в коде

const Vue = require('vue').default
const App = require('./App.vue').default

const uuidInstance = require('uuid/v1')

Vue.prototype.$uuid = uuidInstance

window.app = new Vue({
  render: h => h(App)
}).$mount('#app')
