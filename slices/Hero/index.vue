<script setup lang="ts">
import { type Content } from "@prismicio/client";
import {computed} from 'vue';
import HeroCarousel from '~/slices/Hero/HeroCarousel.vue';
import HeroText from '~/slices/Hero/HeroText.vue';
import HeroTextImage from '~/slices/Hero/HeroTextImage.vue';
import HeroAbout from '~/slices/Hero/HeroAbout.vue';

// gsap.registerPlugin(ScrollTrigger);
const props = defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
const slice = computed(() => props.slice);
const images = computed(() => slice.value.items.map((item, id) => ({...item, id})))
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <HeroCarousel v-if="slice.variation === 'default'" :slice="slice" />
    <HeroText  v-if="slice.variation === 'heroText'" :slice="slice" />
    <HeroTextImage v-if="slice.variation === 'heroTextImage'" :slice="slice" />
    <HeroAbout v-if="slice.variation === 'heroAbout'" :slice="slice" />
  </section>
</template>