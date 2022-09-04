<script lang="ts" setup>
  import { userStore } from "@stores/user"

  const user = userStore()
  const HeroUsername = resolveComponent("HeroUsername")
  const HeroWelcome = resolveComponent("HeroWelcome")
  const PuzzleList = resolveComponent("PuzzleList")
  const ButtonNavigation = resolveComponent("ButtonNavigation")
</script>

<template>
  <div>
    <HeroUsername v-if="!user.username" />
    <template v-else>
      <HeroWelcome />
      <PuzzleList />
      <ButtonNavigation />
    </template>
  </div>
</template>

<style scoped></style>
