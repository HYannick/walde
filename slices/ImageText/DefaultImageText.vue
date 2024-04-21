<template>
  <div class="image-title-text-container">
    <div class="image-title-text" :class="{'-reverse-order': slice.primary.reversed}">
      <div class="image-title-text-content">
        <PrismicText class="image-title-text-title" :field="slice.primary.title"/>
        <PrismicText class="image-title-text-description text -light" :field="slice.primary.text"/>
        <NuxtLink v-if="slice.primary.link && slice.primary.link.uid" :to="`/actions/${slice.primary.link.uid}`"
                  class="image-title-text-link text -bold link">Découvrir
        </NuxtLink>
      </div>
      <PrismicImage class="image-title-text-picture" :field="slice.primary.picture"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type {ImageTextSliceDefault} from '~/prismicio-types';

const props = defineProps<{slice: ImageTextSliceDefault}>()
</script>

<style lang="scss">

.image-title-text-container {
  width: 100%;
  margin: 0 auto 15rem;
  display: flex;
  flex-direction: column;
}

.image-title-text {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: justify;
  margin-top: 10rem;
  align-items: center;
}

.image-title-text-link {
  margin-top: 2rem;
  font-size: 2rem;
  cursor: pointer;
}

.image-title-text-picture {
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  order: 1;
  clip-path: var(--polygon-24);
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.image-title-text-title {
  color: var(--color-black);
  font-family: var(--text-font-title);
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.image-title-text-description {
  display: block;
  max-width: 65rem;
  font-size: 2.5rem;
  text-align: justify;
}

.image-title-text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 2;
  margin-top: 4rem;
}

@media  screen and (min-width: 1024px) {
  .image-title-text-container {
    max-width: 144rem;
    width: 100%;
    margin: 0 auto 15rem;
    padding: 0 1.5rem;
    &.-reverse-order {
      justify-content: flex-end;
    }
  }

  .image-title-text {
    display: flex;
    gap: 6rem;
    text-align: right;
    flex-direction: row;

    align-items: center;

    &.-reverse-order {
      text-align: left;
      .image-title-text-title {
        text-align: left;
      }
      .image-title-text-content {
        order: 2;
        align-items: flex-start;
        .image-title-text-description {
          display: block;
          max-width: 65rem;
          font-size: 2.5rem;
          text-align: left;
        }
      }

    }

    &-content {
      align-items: flex-end;
      order: 1;
      margin-top: 0;
    }

    &-title{
      text-align: right;
      &:after {
        text-align: right;
        margin: 0 0 3rem;
      }
    }
  }

  .image-title-text-picture {
    width: 50rem;
    height: 50rem;
  }

  .image-title-text-description {
    text-align: right;
  }
}
</style>