<template>
  <div class="home">
    <SliceZone :slices="doc.slices" :components="components"/>
  </div>
</template>
<script setup lang="ts">
import {usePrismic } from '@prismicio/vue';
import {components} from '~/slices';
import {useMapSectionAnimation} from '~/composables/animations/home/useMapSectionAnimation';
import {useIntroAnimation} from '~/composables/animations/home/useIntroAnimation';
import {useHeroAnimation} from '~/composables/animations/home/useHeroAnimation';

const {client} = usePrismic()
const {data: home} = await useAsyncData('home', () => client.getByUID('home', 'home')) as any
const doc = computed(() => home.value.data)

onMounted(() => {
  useHeroAnimation().start()
  // useIntroAnimation().start();
  // useMapSectionAnimation().start();
})
</script>
<style lang="scss">
.drop-down-content {
  max-width: 144rem;
  margin: 0;
  padding: 2rem;
  &-item {
    .drop-down-content-text {
      display: none;
      margin: 3rem auto;
      text-align: justify;
    }
    &.-active {
      .drop-down-content-text {
        display: block;
      }
    }
  }
  &-title {
    font-family: var(--text-font-title);
    font-size: 3rem;
    cursor: pointer;
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 0.1rem;
      background-color: var(--color-black);
      transform: scaleX(1);
    }
  }
}
@media  screen and (min-width: 1024px) {
  .drop-down-content {
    margin: 10rem auto;
    &-item {
      .drop-down-content-text {
        margin-top: 3rem;
        text-align: left;
      }
    }
  }
}
</style>