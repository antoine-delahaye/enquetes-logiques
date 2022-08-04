<script lang="ts" setup>
  import { puzzleStore } from "../stores/puzzle"

  const { puzzle } = puzzleStore()
</script>

<template>
  <h1 v-t="{ path: 'name' }" />
</template>

<style scoped></style>
