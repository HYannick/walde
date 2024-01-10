<template>
  <div class="map-details-container">
    <div class="city-details">
      <div class="ov-hidden">
        <PrismicRichText class="text -bold city-name" :field="city.title"/>
        <div class="city-description-picture" data-animate="city-picture">
          <div class="city-description-picture-overlay"></div>
          <PrismicImage :field="city.picture_1"/>
        </div>
      </div>
      <hr class="divider"/>
      <div class="ov-hidden">
        <PrismicRichText class="text city-description" :field="city.description"/>
      </div>
    </div>
    <div class="city-picture city-picture-first" data-animate="city-picture">
      <PrismicImage :field="city.picture_1"/>
    </div>
    <div class="city-picture city-picture-second" data-animate="city-picture">
      <PrismicImage :field="city.picture_2"/>
    </div>
    <div class="city-picture city-picture-third" data-animate="city-picture">
      <PrismicImage :field="city.picture_3"/>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['city'])
</script>

<style lang="scss">
.map-details-container {
  width: 100%;
  height: 100%;
  z-index: 0;
  padding: 1.5rem;
  @media screen and (min-width: 1024px) {
    position: absolute;
    &:not(.map-details-container--current) {
      .divider, .city-name, .city-description, .city-picture > img {
        opacity: 0;
      }
    }
  }
}

.divider {
  background-color: var(--color-primary);
  border: transparent;
  height: 0.2rem;
  margin-bottom: 1rem;
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
}

.city-description-picture {
  display: flex;
  aspect-ratio: 1;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  margin-bottom: 3rem;
  border-radius: 2rem;

  &-overlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(41, 41, 41, 0.50);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 120%;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
}

.city-location {
  position: relative;
  z-index: 2;
  width: 5rem;
  background: var(--color-primary);
  aspect-ratio: 1;
  clip-path: polygon(100.00% 50.00%, 85.36% 85.36%, 50.00% 100.00%, 14.64% 85.36%, 0.00% 50.00%, 14.64% 14.64%, 50.00% 0.00%, 85.36% 14.64%);
}

.city-details {
  width: 100%;
  overflow: hidden;

  .city-name {
    color: var(--color-primary);
    font-family: var(--text-font-bold);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    z-index: 9;
  }

  @media screen and (min-width: 1024px) {
    max-width: 46rem;
    position: absolute;
    top: 5rem;
    left: -42rem;
    height: 20rem;

    .city-name {
      justify-content: flex-start;
      font-size: 2.6rem;
      position: relative;
    }
  }
}

.city-picture {
  position: absolute;
  aspect-ratio: 1;
  clip-path: var(--polygon-14);
  align-items: center;
  justify-content: center;
  display: none;

  &-first {
    width: 43rem;
    height: 43rem;
    bottom: 30rem;
    left: -43rem;
  }

  &-second {
    width: 43rem;
    height: 43rem;
    top: 0;
    right: -45rem;
  }

  &-third {
    width: 26rem;
    height: 26rem;
    bottom: 30rem;
    right: calc(-26rem + 15rem);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 120%;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
}
</style>