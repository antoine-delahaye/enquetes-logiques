import { defineStore } from "pinia"

interface Puzzle {
  id: number
}

export const puzzleStore = defineStore({
  id: "puzzle",

  state: () =>
    ({
      puzzles: [{ id: 0 }, { id: 1 }]
    } as { puzzles: Puzzle[] }),

  getters: {
    getPuzzles(): Puzzle[] {
      return this.puzzles
    }
  },

  actions: {}
})
