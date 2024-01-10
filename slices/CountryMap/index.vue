<script setup lang="ts">
import {type Content} from "@prismicio/client";
import CountryDetails from '~/slices/CountryMap/CountryDetails.vue';
import Map from '~/slices/CountryMap/Map.vue';
import {CountryMapEntry} from '~/slices/CountryMap/CountryMapEntry';


const props = defineProps(
    getSliceComponentProps<Content.CountryMapSlice>([
      "slice",
      "index",
      "slices",
      "context",
    ]),
);
const slice = computed(() => props.slice)

const currentCityIndex = ref(0);
const currentDetails: Ref<CountryMapEntry | null> = ref(null);
const details: Ref<CountryMapEntry[]> = ref([]);
const isAnimating = ref(false);

const setCity = async (index: number) => {
  if (isAnimating.value || index === currentCityIndex.value) return;
  currentCityIndex.value = index;
  const newEntry = details.value[index];
  await updateCity(newEntry);
}

const updateCity = (newEntry: CountryMapEntry) => {
  isAnimating.value = true;
  return Promise.all([
    currentDetails.value!.hide(),
    newEntry.show(),
  ]).then(() => {
    currentDetails.value!.DOM.el.classList.remove('map-details-container--current');
    newEntry.DOM.el.classList.add('map-details-container--current');
    currentDetails.value = newEntry;
    isAnimating.value = false;
  })
};

const cities = computed(() =>
    props.slice.items.map((city: any, i: number) =>
        ({
          id: i,
          title: city.name,
          description: city.description,
          picture_1: city.picture_1,
          picture_2: city.picture_2,
          picture_3: city.picture_3
        })
    ))

onMounted(() => {
  const mapContainer = document.querySelector('.map')!
  const detailsContainer = mapContainer.querySelectorAll('.map-details-container')
  detailsContainer[0].classList.add('map-details-container--current');
  details.value = Array.from(detailsContainer, (el) => new CountryMapEntry(el));
  currentDetails.value = details.value[currentCityIndex.value]
})
</script>

<template>
  <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
  >
    <div class="country-map-actions">
      <div class="title">
        <div class="polygon"></div>
        <PrismicRichText data-splitting class="text" :field="slice.primary.title"/>
      </div>
      <div class="map">
        <CountryDetails :city="city" v-for="(city) in cities"/>
        <Map @selectedCity="setCity" :current-city-index="currentCityIndex"/>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.country-map-actions {
  position: relative;
  margin: 0 auto;
  max-width: 144rem;
  width: 100%;

  .title {
    padding: 1.5rem;
    text-align: center;

    p {
      font-size: 4rem;
      font-family: var(--text-font-title);
    }

    .polygon {
      position: absolute;
      z-index: -1;
      width: 30rem;
      top: -15rem;
      left: -20rem;
      aspect-ratio: 1;
      opacity: 0;
      background: rgba(41, 41, 41, 0.10);
      clip-path: var(--polygon-14);
    }

    @media screen and (min-width: 1024px) {
      text-align: left;
      padding: 0;
      p {
        font-size: 5rem;
      }
      .polygon {
        opacity: 1;
      }
    }
  }

  .map {
    max-width: 60rem;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
}
</style>