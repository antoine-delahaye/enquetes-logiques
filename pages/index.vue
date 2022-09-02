<script lang="ts" setup>
  import { userStore } from "@stores/user"

  const user = userStore()
  const Username = resolveComponent("HeroUsername")
  const Welcome = resolveComponent("HeroWelcome")
</script>

<template>
  <div>
    <component :is="user.username ? Welcome : Username" />
    <template v-if="user.username">
      <div class="grid grid-cols-3">
        <div class="card w-96 bg-base-100 shadow-xl mx-auto mb-24" v-for="i in 6">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <NuxtLink class="btn btn-primary" :to="'/puzzle/' + i">Buy Now</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-group grid grid-cols-2 w-96 mx-auto mb-6">
        <button class="btn btn-outline" v-text="$t('button.previous')" />
        <button class="btn btn-outline" v-text="$t('button.next')" />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
