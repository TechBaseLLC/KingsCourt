<template>
  <div>
    <p>My page {{ helloWorldResponse }}</p>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const helloWorldResponse = ref('Not received')

onMounted(() => getHelloWorldResponse())

async function getHelloWorldResponse() {
  helloWorldResponse.value = await $fetch('/api/hello')
  const player = await $fetch('/api/player')

  console.log(player, 'Here is the returned player')
}
</script>
