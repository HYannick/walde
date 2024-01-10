<script setup lang="ts">
import type {HeroSliceHeroText} from '~/prismicio-types';

const props = defineProps<{slice:  HeroSliceHeroText
}>();
</script>

<template>
  <div class="container">
    <div class="page-headline">
      <PrismicRichText class="page-headline-title text -title-1" :field="slice.primary.text"/>
    </div>
  </div>
</template>

<style lang="scss">
.page-headline {
  h1 {
    font-size: 3rem;
    text-align: center;
    order: 2;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 30rem;
    left: -3rem;
    top: -6rem;
    opacity: 1;
    scale: 1;
    aspect-ratio: 1;
    background: rgba(216, 152, 79, 0.2);
    clip-path: var(--polygon-14);
  }
}

@media  screen and (min-width: 1024px) {
  .page-headline {
    margin: 10rem 0;

    h1 {
      font-size: 5rem;
      text-align: left;
    }
    &:before {
      display: block;
      left: -3rem;
      top: -6rem;
    }
  }
}
</style>