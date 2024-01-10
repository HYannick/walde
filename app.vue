<template>
  <div class="app-container">
    <Header :content="headerData.data" />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer :content="footerData.data" />
  </div>
</template>
<script setup lang="ts">
import Header from '~/components/common/header/Header.vue';
import Footer from '~/components/common/footer/Footer.vue';

const { client } = usePrismic()
const {data: headerData} = await useAsyncData('navigation', () => client.getSingle('header'))
const {data: footerData} = await useAsyncData('footer', () => client.getSingle('footer'))
</script>
<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

/* Your existing page transition styles */
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}
.page-enter-from, .page-leave-to {
  opacity: 0;
}
</style>
