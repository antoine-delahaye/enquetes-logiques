<script lang="ts" setup>
  import { puzzleStore } from "../../stores/puzzle"

  const id = useRoute().params.id
  const { puzzle } = puzzleStore()
</script>

<template>
  <div>
    <h2 v-t="'puzzle.' + id + '.title'" />
    <ul>
      <li
        v-for="i in puzzle[id].clues"
        v-t="'puzzle.' + id + '.clues[' + (i - 1) + ']'" />
    </ul>
  </div>
</template>

<style scoped></style>
