<template>
  <div class="todo-container">
    <span class="error">{{ innerData.error }}</span>
    <div class="add">
      <input v-model="value" id="input-focus" />
      <!-- <p>Hellow World!</p> -->
      <button v-on:click="addToDo()">ADD</button>
    </div>

    <div class="filter">
      <button class="filter-active-button" v-on:click="setFilter('active')">
        Активные
      </button>
      <button
        class="filter-complete-button"
        v-on:click="setFilter('completed')"
      >
        Завершенные
      </button>
      <button class="filter-all-button" v-on:click="setFilter('all')">
        Все
      </button>
    </div>

    <div class="list">
      <ul>
        <li
          class="list-item"
          v-for="(todo, index) in filteredToDo"
          v-bind:key="todo.id"
        >
          <span>{{ todo.value }}</span>
          <button
            class="complete-button"
            v-if="!todo.completed"
            v-on:click="completeToDo(index)"
          >
            &#9889;
          </button>
          <button class="remove-button" v-on:click="removeToDo(index)">
            &#128293;
          </button>
        </li>
      </ul>
    </div>

    <!-- <div v-if="innerData.activeFilter == 'active'">
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
    </div> -->

    <!-- <div>
      <span v-on:click="setFilter('active')">Активные</span>
      <span v-on:click="setFilter('all')">Все</span>
      <span v-on:click="setFilter('completed')">Завершенные</span>
    </div> -->
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
        activeFilter: '',
        error: ' '
      },
      value: 'Задача 1'
    }
  },
  computed: {
    filteredToDo() {
      const filter = this.innerData.activeFilter
      let sentence

      if (filter === 'active') {
        sentence = zadacha => zadacha.completed === false
      } else if (filter === 'completed') {
        sentence = zadacha => zadacha.completed === true
      } else {
        sentence = zadacha => zadacha
      }

      return this.innerData.zadachi.filter(sentence)
    }
  },
  mounted() {
    document.getElementById('input-focus').focus()
    // console.log(inputEl)
    // inputEl.focus()
  },
  methods: {
    addToDo() {
      if (this.value) {
        if (this.value.length < 15) {
          this.innerData.zadachi.push({
            id: this.$uuid(),
            value: this.value,
            completed: false
          })
        } else {
          this.innerData.error = 'Don not take so much on you!'
        }

        this.value = ''
      }
    },
    completeToDo(index) {
      this.$set(this.innerData.zadachi[index], 'completed', true)
    },
    removeToDo(index) {
      this.innerData.zadachi.splice(index, 1)
    },
    setFilter(filter) {
      this.$set(this.innerData, 'activeFilter', filter)
    }
  }
}
</script>

<style lang="css" scoped>
.todo-container {
  margin: 0 auto;
  width: 20rem;
  background-color: azure;
  padding: 1rem;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: space-between; */
}

.todo-container .error {
  color: red;
  font-size: 0.75rem;
  padding-left: 1.2rem;
}

.add {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
}

.add input {
  font-size: 2rem;
  width: 70%;
  padding-left: 0.5rem;
}

.add button {
  line-height: 2rem;
  background-color: lightgrey;
}

button {
  font-weight: bold;
  color: white;
}

.filter {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  /* align-items: ; */
}

.filter button {
  /* width: 27%; */
  margin: 0 0.25rem;
  /* border-radius: 0; */
  line-height: 1.5rem;
  border: 0;
}

.filter-active-button {
  background-color: rgb(255, 108, 82);
  width: 27%;
}

.filter-complete-button {
  background-color: rgb(70, 88, 252);
  width: 33%;
}

.filter-all-button {
  background-color: rgba(47, 207, 82, 0.795);
  width: 22%;
}

.list {
  margin: 1rem 0;
  font-size: 1rem;
  text-transform: uppercase;
}

ul {
  list-style: none;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}

li {
  display: flex;
  margin: 0.5rem;
}

li span {
  flex-grow: 1;
  line-height: 2rem;
}

li button {
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  cursor: pointer;
  font-size: 1rem;
}

.complete-button {
  background-color: rgba(70, 88, 252, 0.274);
}
</style>
