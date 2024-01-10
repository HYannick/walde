<script setup lang="ts">
import type {HeroSliceHeroAbout, HeroSliceHeroTextImage} from '~/prismicio-types';
import YoutubePlayer from '~/components/slices/YoutubePlayer.vue';

const props = defineProps<{slice:  HeroSliceHeroAbout
}>();

</script>

<template>
  <div class="container">
    <div class="page-headline">
      <PrismicRichText class="page-headline-title text -title-1" :field="slice.primary.text"/>
      <div class="video-bloc">
        <YoutubePlayer :videoUrl="slice.primary.video.url"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-headline {
  .page-headline-title {
    order: 2;
    flex: 1.2;
    h1 {
      font-size: 3rem;
      text-align: center;
      order: 2;
    }
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

  .video-bloc {
    width: 100%;
    aspect-ratio: 1;
    background: var(--color-black);
    position: initial;
    border-radius: 1rem;
    overflow: hidden;
    order: 1;
    clip-path: var(--polygon-24);
    @media  screen and (min-width: 1024px) {
      width: 90rem;
      height: 50rem;
      position: absolute;
      top: 20rem;
      right: 0;
      clip-path: none;
    }
  }

  @media  screen and (min-width: 1024px) {
    margin: 5rem 0;
    flex-direction: row-reverse;
    .page-headline-title {
      flex: 1.2;
      h1 {
        text-align: left;
        font-size: 5rem;
      }
    }
  }
}

</style>