<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.PolygonTextSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const slice = computed(() => props.slice);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="container">
      <div class="headline" v-if="slice.variation === 'default'">
        <PrismicRichText class="text -title-1" :field="slice.primary.text"/>
      </div>
      <div class="foot-line" v-if="slice.variation === 'centered'">
        <div class="polygon"></div>
        <PrismicRichText class="text" :field="slice.primary.text" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.headline {
  max-width: 90rem;
  width: 100%;
  padding: 3rem;
  position: relative;
  margin: 40rem 0;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 40rem;
    right: -2rem;
    top: 5rem;
    opacity: 1;
    scale: 1;
    aspect-ratio: 1;
    background: rgba(216, 152, 79, 0.5);
    clip-path: var(--polygon-14);
  }
}
.foot-line {
  max-width: 80rem;
  text-align: center;
  margin: 10rem auto;
  position: relative;
  padding: 2rem;
  font-size: 2.5rem;
  .polygon {
    position: absolute;
    z-index: -1;
    width: 30rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
    aspect-ratio: 1;
    background: var(--color-primary);
    clip-path: var(--polygon-14);
  }
}

@media  screen and (min-width: 1024px) {
  .foot-line {
    font-size: 3rem;
    padding: 0;
    margin: 20rem auto;
  }
}
</style>
