<script lang="ts" setup>
  import { puzzleStore } from "../stores/puzzle"

  const { puzzle } = puzzleStore()
</script>

<template>
  <div>
    <h1 v-t="{ path: 'name' }" />
  </div>
</template>

<style scoped></style>
