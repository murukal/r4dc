import Vue from 'vue'

export const store = Vue.observable({
  name: 'tutu',
  age: 10
})

export const grow = () => {
  store.age++
}
