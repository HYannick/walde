<script setup lang="ts">
import Carousel from '~/components/common/Carousel.vue';
import {computed} from 'vue';
import type {HeroSliceDefault} from '~/prismicio-types';

// gsap.registerPlugin(ScrollTrigger);
const props = defineProps<{slice:  HeroSliceDefault
}>();
const images = computed(() => props.slice.items.map((item, id) => ({...item, id})))
</script>

<template>
  <div class="hero">
    <div class="hero-slider">
      <Carousel :slides="images" />
    </div>
    <div class="hero-description-wrapper">
      <div class="hero-description">
        <div class="sub-heading">
          <div class="polygon" data-animate="polygon"></div>
          <PrismicRichText data-splitting class="text" :field="slice.primary.description"/>
        </div>
        <div class="heading">
          <div class="polygon" data-animate="polygon"></div>
          <PrismicRichText data-splitting class="text" :field="slice.primary.title" />
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
.hero {
  position: relative;
  width: 100%;
  margin: 0 auto;
  &-slider {
    width: 100%;
    height: 40rem;
    position: relative;
    padding: 1.5rem;
  }

  &-control-wrapper {
    position: absolute;
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-background);
    aspect-ratio: 1;
    clip-path: var(--controls-clip-path);
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 8rem;
      transform: scale(0.8);
      background: var(--color-black);
      aspect-ratio: 1;
      clip-path: var(--controls-clip-path);
    }
    &.control-left {
      bottom: 0;
      left: 2rem;
    }
    &.control-right {
      top: 0;
      right: 2rem;
    }
  }
  &-description {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 5rem 0;
    gap: 20rem;
  }
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

.polygon-container {
  width: 100%;
  height: 100%;
}

.sub-heading {
  font-size: 2.5rem;
  line-height: 3.6rem;
  width: 100%;
  padding: 0 2rem;
  margin-right: 10rem;

  p {
    font-family: var(--text-font-bold);
    overflow: hidden;
    strong {
      color: var(--color-primary)
    }
  }
  .polygon {
    position: absolute;
    z-index: -1;
    width: 8rem;
    top: -2rem;
    left: -2rem;
    opacity: 0;
    scale: 0.5;
    aspect-ratio: 1;
    background: rgba(41, 41, 41, 0.10);
    clip-path: var(--polygon-14);
  }
}

.heading {
  display: none;
  position: relative;
  margin-right: 5rem;

  h1 {
    font-size: 12rem;
    width: 60rem;
    text-align: right;
    overflow: hidden;
    line-height: 12rem;
    font-family: var(--text-font-title);
  }

  .polygon {
    content: '';
    position: absolute;
    z-index: -1;
    width: 33rem;
    right: -4rem;
    bottom: -2rem;
    opacity: 0;
    scale: 0.5;
    aspect-ratio: 1;
    background: rgba(248, 150, 63, 0.20);
    clip-path: var(--polygon-14);
  }
}

@media  screen and (min-width: 1024px) {
  .hero {
    padding: 0;
    position: relative;
    width: 100%;
    max-width: 192rem;
    margin: 0 auto;
    display: flex;
    &-slider {
      translate: -10rem 0;
      max-width: 115rem;
      width: 100%;
      height: 95rem;
      position: relative;
      padding: 0;
    }
    &-description-wrapper {
      width: 80rem;
    }

    &-control-wrapper {
      position: absolute;
      width: 13rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-background);
      aspect-ratio: 1;
      clip-path: var(--controls-clip-path);
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 13rem;
        transform: scale(0.8);
        background: var(--color-black);
        aspect-ratio: 1;
        clip-path: var(--controls-clip-path);
      }
      &.control-left {
        bottom: 8rem;
        left: 10.5rem;
      }
      &.control-right {
        top: 15rem;
        right: 3.5rem;
      }
    }

    &-description {
      margin-bottom: 5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 5rem;
      position: absolute;
      right: 0;
      bottom: 10rem;
    }
  }

  .slide {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  .polygon-container {
    width: 100%;
    height: 100%;
  }

  .sub-heading {
    font-size: 3.6rem;
    line-height: 3.6rem;
    padding: 0;
    width: 42rem;
    text-align: left;
  }

  .heading {
    display: block;
  }
}
</style>