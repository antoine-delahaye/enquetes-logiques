import { defineStore } from "pinia"
import { ref } from "vue"

export const puzzleStore = defineStore("puzzle", () => {
  const puzzle = ref({
    floorPrice: {
      clues: 5,
      size: {
        i: 3,
        j: 5
      }
    },
    theSequence: {
      clues: 4
    }
  })

  return { puzzle }
})
