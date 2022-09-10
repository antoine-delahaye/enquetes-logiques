<script lang="ts" setup>
  import { userStore } from "@stores/user"

  const { username } = userStore()
</script>

<template>
  <NuxtLayout name="hero">
    <div class="hero-content text-center flex flex-col">
      <h1 class="text-5xl font-bold" v-text="$t('component.welcome.title', { name: username })" />
      <p class="max-w-md">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
        exercitationem quasi.
        In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
