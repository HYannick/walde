<template>
  <div class="contact">
    <div class="contact-picture">
      <PrismicImage :field="doc.picture" data-animate="contact-picture"/>
    </div>
    <div class="contact-content">
      <PrismicRichText class="contact-intro text" :field="doc.intro"/>
      <div class="contact-infos">
        <PrismicRichText class="text -bold" :field="contactInfo.name"/>
        <PrismicRichText class="text" :field="contactInfo.adress"/>
        <PrismicRichText class="text" :field="contactInfo.phone"/>
        <PrismicRichText class="text" :field="contactInfo.mail"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {usePrismic} from '@prismicio/vue';

const {client} = usePrismic()
const {data: contact} = await useAsyncData('contact', () => client.getByUID('contact', 'contact')) as any
const doc = computed(() => contact.value.data)
const contactInfo = computed(() => contact.value.data.contact[0])
</script>
<style lang="scss">
.contact-intro {
  font-size: 2.5rem;
  font-family: var(--text-font-light);
}
.contact-infos {
  margin-top: 5rem;
  font-size: 2rem;
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: justify;
  }
}
.contact {
  display: flex;
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  gap: 10rem;
  padding: 1.5rem;
  text-align: justify;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }
}

.contact-picture {
  width: 100%;
  height: 100%;
  clip-path: var(--polygon-14);
  aspect-ratio: 1;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1024px) {

  }
}

.contact-content {
  flex: 1;
  @media screen and (min-width: 1024px) {

  }
}
</style>