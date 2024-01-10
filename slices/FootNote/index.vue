<script setup lang="ts">
import { type Content } from "@prismicio/client";


const props = defineProps(
  getSliceComponentProps<Content.FootNoteSlice>([
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
    <div class="foot-note">
      <div class="poly-background"></div>
      <div class="foot-note-content">
        <PrismicText class="text body -light" :field="slice.primary.text"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.foot-note {
  position: relative;
  font-size: 2.5rem;
  padding: 2rem;
  text-align: justify;
  margin-top: 10rem;
  &-content {
    max-width: 144rem;
    margin: 0 auto 10rem;
    .text {
      color: var(--color-actions-text);
    }
  }
  .poly-background {
    position: absolute;
    z-index: -1;
    top: -10rem;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--color-actions-background);
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0% 100%);;
  }
  @media  screen and (min-width: 1024px) {
    font-size: 3rem;
    padding: 5rem;
    margin-top: 0;
    text-align: center;
    .poly-background {
      top: -20rem;
      clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%);;
    }
  }
}
</style>
