<script lang="ts" setup>
  const PuzzleCard = resolveComponent("PuzzleCard")
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 m-5">
    <div class="card bg-base-100 shadow-xl" v-for="i in 6">
      <PuzzleCard />
    </div>
  </div>
</template>

<style scoped></style>
