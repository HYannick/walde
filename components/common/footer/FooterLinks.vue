<template>
  <div class="footer-links-bloc">
    <PrismicText class="text -light" :field="data.copyright"/>
    <ul class="footer-links-items">
      <li v-for="item in data.legalLinks">
        <NuxtLink class="text -light link-style" :to="item.link.uid">{{ item.label[0].text }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import type {RichTextField} from '@prismicio/client';
import type {FooterDocumentDataLegalLinksItem} from '~/prismicio-types';

const props = defineProps<{data: {copyright: RichTextField, legalLinks: FooterDocumentDataLegalLinksItem[]}}>();
</script>
<style lang="scss">
.footer-links-bloc {
  border-top: 0.1rem solid var(--footer-border-color);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem 0;
  margin-top: 6rem;
  align-items: center;

  .footer-links-items {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    align-items: center;

    .text {
      font-weight: bold;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    .footer-links-items {
      flex-direction: row;
      align-items: flex-start;
      gap: 4rem;

      .text {
        font-weight: initial;
      }
    }
  }
}
</style>
