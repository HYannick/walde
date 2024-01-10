<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-top-content">
        <div class="footer-navigation">
          <FooterNavList :title="navigationTitle" :navLinks="footerNavigation"/>
          <FooterNavList :title="socialTitle" :navLinks="socialNavigation"/>
        </div>
        <div class="footer-contact">
          <FooterContactBloc :contact="contactContent"/>
        </div>
      </div>
      <div class="footer-links">
        <FooterLinks :data="footerLinksData"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import FooterNavList from '~/components/common/footer/FooterNavList.vue';
import FooterContactBloc from '~/components/common/footer/FooterContactBloc.vue';
import FooterLinks from '~/components/common/footer/FooterLinks.vue';
import type {FooterDocument} from '~/prismicio-types';


const props = defineProps<{ content: FooterDocument['data'] }>()
const navigationTitle = computed(() => props.content.navigation_title)

const socialTitle = computed(() => props.content.social_title)

const footerNavigation = computed(() => props.content.footer_navigation)

const contactContent = computed(() => props.content.contact[0])

const socialNavigation = computed(() => props.content.social_media)

const footerLinksData = computed(() => ({
  copyright: props.content.copyright,
  legalLinks: props.content.legal_links
}))
</script>

<style lang="scss">
.footer {
  border-top: 0.1rem solid var(--footer-border-color);
  margin-top: 5rem;

  &-container {
    max-width: 144rem;
    width: 100%;
    margin: 0 auto;
    padding: 5rem 1rem 0;
  }

  &-navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  &-top-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    &-navigation {
      flex-direction: row;
      align-items: flex-start;
      gap: 10rem;
    }
    &-top-content {
      flex-direction: row;
    }
  }
}
</style>