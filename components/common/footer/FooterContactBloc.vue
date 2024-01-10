<template>
  <div class="footer-contact-bloc">
    <div class="contact-information">
      <PrismicText class="text -bold -body" :field="contact.name"/>
      <PrismicText class="text -body" :field="contact.adress"/>
      <PrismicText class="text -body" :field="contact.phone"/>
      <PrismicText class="text -body" :field="contact.mail"/>
    </div>
    <Icon name="logo-walde" class="walde-logo"/>
  </div>
</template>
<script lang="ts" setup>
import Icon from '~/components/common/Icon.vue';
import type {RichTextField} from '@prismicio/client';

type ContactProps = {
  name: RichTextField;
  adress: RichTextField;
  phone: RichTextField;
  mail: RichTextField;
}
const props = defineProps<{ contact: ContactProps }>();

</script>
<style lang="scss">
.footer-contact-bloc {
  display: flex;
  gap: 4rem;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;

  .contact-information {
    order: 2;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-top: 0;
    .contact-information {
      order: 1;
      text-align: right;
    }
    .walde-logo {
      order: 2;
      display: block;
      width: 12rem;
      height: 8rem;

      .text, .chicken {
        fill: var(--color-black);
        transition: fill 0.3s cubic-bezier(0.65, 0, 0.35, 1);
      }
    }
  }
}
</style>
