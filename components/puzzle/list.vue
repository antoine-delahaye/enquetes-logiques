<script lang="ts" setup>
  import { puzzleStore } from "@stores/puzzle"

  const { puzzles } = puzzleStore()
  const PuzzleCard = resolveComponent("PuzzleCard")
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 m-5">
    <div class="card bg-base-100 shadow-xl" v-for="(_, key) of puzzles">
      <PuzzleCard :puzzleId="key" />
    </div>
  </div>
</template>

<style scoped></style>
