import { useLocalStorage } from "@vueuse/core"
import { defineStore } from "pinia"

export const userStore = defineStore("user", () => {
  const username = useLocalStorage("username", "")

  function setUsername(newUsername: string) {
    username.value = newUsername
  }

  return { username, setUsername }
})
