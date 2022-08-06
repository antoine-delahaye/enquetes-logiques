<script lang="ts" setup>
  import { userStore } from "../stores/user"

  const user = userStore()
  const Username = resolveComponent("Username")
  const Welcome = resolveComponent("Welcome")
</script>

<template>
  <div>
    <component :is="user.username ? Welcome : Username" />
  </div>
</template>

<style scoped></style>
