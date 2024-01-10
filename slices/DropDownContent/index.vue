<script setup lang="ts">
import { type Content } from "@prismicio/client";


const props = defineProps(
  getSliceComponentProps<Content.DropDownContentSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
const activeIndex = ref<number | null>(0);

const toggleContent = (index: number) => {
  if(activeIndex.value === index) {
    activeIndex.value = null;
    return;
  }
  activeIndex.value = index;
}

const slice = computed(() => props.slice);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="drop-down-content">
      <div class="drop-down-content-item" :class="{'-active': activeIndex === index}" v-for="(item, index) in slice.items" :key="index" @click="toggleContent(index)">
        <PrismicRichText class="drop-down-content-title text" :field="item.title" />
        <PrismicRichText class="drop-down-content-text text -large-body -light"  :field="item.text" />
      </div>
    </div>
  </section>
</template>
