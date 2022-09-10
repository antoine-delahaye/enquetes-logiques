<script lang="ts" setup>
  const props = defineProps(["puzzleId"])
</script>

<template>
  <div class="card-body">
    <h2 class="card-title" v-text="$t('puzzle.' + props.puzzleId + '.title')" />
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <NuxtLink class="btn btn-primary" to="puzzle">Buy Now</NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
