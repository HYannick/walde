<script setup lang="ts">
import {type Content} from "@prismicio/client";

const props = defineProps(
    getSliceComponentProps<Content.StatsDisplaySlice>([
      "slice",
      "index",
      "slices",
      "context",
    ]),
);
const slice = computed(() => props.slice)
const currentStat = ref(0);

const setCurrentStat = (index: number) => currentStat.value = index
</script>

<template>
  <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
  >
    <div class="stats-display">
      <div class="poly-background"></div>
      <PrismicText class="stats-display-title text" :field="slice.primary.title"/>
      <div class="stats-display-data">
        <div class="data-content" v-for="(statData, id) in slice.items" :key="statData.text" @mouseenter="setCurrentStat(+id)">
          <PrismicText class="data-content-stat" :field="statData.stat"/>
          <PrismicText class="data-content-text -large-body -light" :field="statData.text"/>
        </div>
        <div class="stats-display-picture">
          <PrismicImage :field="slice.items[currentStat].picture"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.poly-background {
  position: absolute;
  z-index: -1;
  top: -20rem;
  left: 0;
  bottom: -10rem;
  right: 0;
  background: var(--color-stats-background);
  clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%);;
}
.stats-display {
  padding: 0 1.5rem;
  text-align: center;
  margin: 40rem auto 0;
  &-title {
    font-family: var(--text-font-title);
    font-size: 5rem;
  }

  &-data {
    position: relative;
    margin: 10rem auto;
    max-width: 67.5rem;
  }

  &-picture {
    display: none;
    margin: 0 auto;
    width: 67.5rem;
    height: 67.5rem;
    clip-path: var(--polygon-24);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media screen and (min-width: 1024px) {
      display: block;
    }
  }

  .data-content {
    color: var(--color-black);
    cursor: pointer;
    margin-bottom: 3rem;
    &-stat {
      font-family: var(--text-font-title);
      font-size: 4.5rem;
    }
    &-text {
      font-family: var(--text-font-light);
      font-size: 3rem;
    }

    @media screen and (min-width: 1024px) {
      position: absolute;
      margin-bottom: 0;
      &:hover {
        color: var(--color-primary);
      }
      &:nth-child(1) {
        top: 5rem;
        left: -20rem;
      }
      &:nth-child(2) {
        top: 2rem;
        right: -20rem;
      }
      &:nth-child(3) {
        bottom: 10rem;
        left: -25rem;
      }
      &:nth-child(4) {
        bottom: 5rem;
        right: -20rem;
      }
    }
  }
}
</style>
