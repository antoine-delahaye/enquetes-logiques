<script lang="ts" setup>
  import { userStore } from "@stores/user"

  const user = userStore()
  const username = null
</script>

<template>
  <div class="hero">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1
          class="text-5xl font-bold"
          v-text="$t('component.username.title')" />
        <p class="py-6" v-text="$t('component.username.subtitle')" />
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form
          class="card-body"
          v-on:submit.prevent="user.setUsername(username)">
          <div class="form-control">
            <label class="label">
              <span
                class="label-text"
                v-text="$t('component.username.label')" />
            </label>
            <input
              type="text"
              class="input input-bordered"
              :placeholder="$t('component.username.placeholder')"
              v-model="username"
              required />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" v-text="$t('button.play')" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
