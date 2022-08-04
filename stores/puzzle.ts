import { defineStore } from "pinia"
import { ref } from "vue"

export const puzzleStore = defineStore("puzzle", () => {
  const puzzle = ref({
    floorPrice: {
      clues: 5
    },
    theSequence: {
      clues: 4
    }
  })

  return { puzzle }
})
