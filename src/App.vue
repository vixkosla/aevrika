<template>
  <div>
    <input v-model="value" id="search" />
    <p>Hellow World!</p>
    <button v-on:click="addToDo()">Добавить задачу</button>

    <div v-if="innerData.activeFilter == 'active'">
      <div
        v-for="(todo, index) in innerData.zadachi"
        v-bind:key="todo.id"
        v-if="todo.completed != true"
      >
        {{ todo.name }}
        <button v-on:click="completeToDo(index)">Выполнить задачу</button>

        <div v-on:click="remove(todo)"></div>
      </div>
    </div>

    <div v-if="innerData.activeFilter == 'all'">
      <div v-for="(todo, index) in innerData.zadachi" v-bind="todo.id">
        {{ todo.name }}
        <div v-on:click="remove(todo)"></div>
      </div>
    </div>

    <div v-if="innerData.activeFilter == 'completed'">
      <div
        v-for="(todo, index) in innerData.zadachi"
        v-bind="todo.id"
        v-if="todo.completed == true"
      >
        {{ todo.name }}
        <div v-on:click="remove(todo)"></div>
      </div>
    </div>

    <div>
      <span v-on:click="setFilter('active')">Активные</span>
      <span v-on:click="setFilter('all')">Все</span>
      <span v-on:click="setFilter('completed')">Завершенные</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  // el: '#app',
  data() {
    return {
      innerData: {
        zadachi: [],
        activeFilter: ''
      },
      value: 'Задача 1'
    }
  },
  created() {
    // const search = document.getElementById('search') || {}
    // search.focus()
  },
  methods: {
    // todo(t) {
    //   zadachi[zadachi.length + 1] = t
    // },
    addToDo() {
      if (this.value) {
        this.innerData.zadachi.push({
          id: this.$uuid(),
          value: this.value,
          completed: false
        })
      }
    },
    completeToDo(index) {
      // this.innerData.zadachi[index].completed = !this.innerData.zadachi[index].completed
      this.$set(
        this.innerData.zadachi[index],
        'completed',
        !this.innerData.zadachi[index].completed
      )
    },
    removeToDo(t) {
      // var todos = [];

      const index = this.innerData.zadachi.indexOf(t)
      this.innerData.zadachi.splice(index, 1)

      // for (var i = 0; i < todos.length; i++) {
      //   if (todos[i].name !== t.name) {
      //     todos.push(todos[i]);
      //   }
      // }
      // this.$set(this.innerData, "zadachi", todos);
    },
    setFilter(filter) {
      this.$set(this.innerData, 'activeFilter', filter)
    }
  }
}
</script>

<style lang="css" scoped></style>
