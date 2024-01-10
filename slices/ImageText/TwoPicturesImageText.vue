<template>
  <div class="image-text">
    <div class="image-text-pictures">
      <div class="first-picture">
        <PrismicImage :field="slice.primary.primary_picture" data-animate="image-text-picture"/>
      </div>
      <div class="second-picture">
        <div class="second-picture-poly">
          <PrismicImage :field="slice.primary.secondary_picture" data-animate="image-text-picture"/>
        </div>
      </div>
    </div>
    <div class="image-text-content" data-animate="image-text-content">
      <PrismicRichText class="text intro-text -light" :field="slice.primary.text"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {ImageTextSliceWithTwoPictures} from '~/prismicio-types';

const props = defineProps<{slice: ImageTextSliceWithTwoPictures}>()
</script>

<style lang="scss">
.image-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20rem;
  padding: 0 1.5rem;
  font-size: 2.6rem;
  max-width: 144rem;
  gap: 10rem;
  flex-direction: column;
  .spacer {
    height: 4rem;
  }
  .image-text-pictures {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .first-picture {
    width: 67.5rem;
    height: 67.5rem;
    clip-path: var(--polygon-14);
    aspect-ratio: 1;
  }

  .second-picture {
    width: 30rem;
    height: 30rem;
    position: absolute;
    bottom: -10rem;
    right: -10rem;

    .second-picture-poly {
      clip-path: var(--polygon-14);
      aspect-ratio: 1;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 30rem;
      height: 30rem;
      transform: scale(1.1);
      background: var(--color-background);
      aspect-ratio: 1;
      clip-path: var(--polygon-14);
    }
  }
}

@media  screen and (min-width: 1024px) {
  .image-text {
    flex-direction: row;
  }
}
</style>