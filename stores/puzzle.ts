import { defineStore } from "pinia"
import { ref } from "vue"

export const puzzleStore = defineStore("puzzle", () => {
  const puzzles = ref({
    floorPrice: {
      clues: 5,
      size: {
        i: 3,
        j: 5
      }
    },
    theSequence: {
      clues: 4,
      size: {
        i: 4,
        j: 4
      }
    },
    suchDogSuchMaster: {
      clues: 5,
      size: {
        i: 3,
        j: 5
      }
    },
    augustInFire: {
      clues: 4,
      size: {
        i: 3,
        j: 5
      }
    },
    homeMade: {
      clues: 5,
      size: {
        i: 3,
        j: 5
      }
    },
    dollHouse: {
      clues: 4,
      size: {
        i: 3,
        j: 5
      }
    },
    toWantAndToBeAbleTo: {
      clues: 6,
      size: {
        i: 3,
        j: 5
      }
    },
    checkmate: {
      clues: 4,
      size: {
        i: 3,
        j: 5
      }
    },
    hereWeGoAgain: {
      clues: 5,
      size: {
        i: 4,
        j: 4
      }
    }
  })

  return { puzzles }
})
