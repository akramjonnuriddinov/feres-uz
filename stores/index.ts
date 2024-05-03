import { defineStore } from 'pinia'

export const useFontStore = defineStore('font', {
  state: () => ({
    count: 0
  }),
  getters: {
    getCount: (state) => state.count
  },
  actions: {
    increase() {
      this.count++
    }
  }
})