import { defineStore } from "pinia"
import { ref } from "vue"

export const puzzleStore = defineStore("puzzle", () => {
  const puzzle = ref({
    0: {
      clues: 5
    },
    1: {
      clues: 4
    }
  })

  return { puzzle }
})
