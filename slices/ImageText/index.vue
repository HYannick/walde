<script setup lang="ts">
import { type Content } from "@prismicio/client";
import DefaultImageText from '~/slices/ImageText/DefaultImageText.vue';
import TwoPicturesImageText from '~/slices/ImageText/TwoPicturesImageText.vue';


const props = defineProps(
  getSliceComponentProps<Content.ImageTextSlice>([
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
    <DefaultImageText v-if="slice.variation === 'default'" :slice="slice" />
    <TwoPicturesImageText
      v-else-if="slice.variation === 'withTwoPictures'"
      :slice="slice" />
  </section>
</template>

<style lang="scss">
</style>