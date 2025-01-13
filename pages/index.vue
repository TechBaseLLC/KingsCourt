<template>
  <div>
    <p class="underline">Testing tailwindcss {{ helloWorldResponse }}</p>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
let helloWorldResponse = $ref('Not received')

onMounted(() => getHelloWorldResponse())

async function getHelloWorldResponse() {
  helloWorldResponse = await $fetch('/api/hello')
  const player = await $fetch('/api/player')

  console.log(player, 'Here is the returned player')
}
</script>
