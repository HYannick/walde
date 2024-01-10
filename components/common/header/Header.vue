<template>
  <div class="header">
    <div class="logo-wrapper">
      <NuxtLink to="/">
        <Icon name="logo-walde" class="logo"/>
      </NuxtLink>
    </div>
    <ul class="navigation" :class="{'-nav-open': navigationOpen}" ref="navigation">
      <li class="home-link">
        <NuxtLink to="/" class="text -bold">
          Accueil
        </NuxtLink>
      </li>
      <li v-for="item in content.navigation" :key="item.link.id">
        <NuxtLink :to="{name: item.link.uid}" class="text -bold">
          {{ item.label[0].text }}
        </NuxtLink>
      </li>
    </ul>
    <div class="actions">
      <button class="icon-button mobile-menu" @click="toggleNavigation">{{ mobileMenuLabel }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useTheme} from "~/composables/useTheme";
import Icon from "~/components/common/Icon.vue";
import type {HeaderDocument} from '~/prismicio-types';

const props = defineProps<{ content: HeaderDocument['data'] }>();

const {setTheme, switchTheme, themeLabel} = useTheme();
const {currentRoute} = useRouter();

const navigation = ref(null);
const navigationOpen = ref(false);
setTheme();

const toggleNavigation = () => navigationOpen.value = !navigationOpen.value
const mobileMenuLabel = computed(() => {
  if (!navigationOpen.value) {
    return 'Menu'
  }
  return 'Fermer'
})

watch(currentRoute, () => {
  navigationOpen.value = false
})
</script>

<style lang="scss">
.icon-button {
  border: none;
  background: transparent;
}

.header {
  display: flex;
  width: 100%;
  max-width: 144rem;
  margin: 0 auto 2rem;
  justify-content: space-between;

  > div {
    flex: 1;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
    height: 8rem;
    align-items: center;
  }
}

.logo-wrapper {
  .logo {
    display: block;
    width: 12rem;
    height: 8rem;
    margin-left: 1rem;
    margin-top: 1rem;
    @media screen and (min-width: 1024px) {
      margin: 0;
    }

    .walde-logo {
      .text, .chicken {
        fill: var(--color-black);
        transition: fill 0.3s cubic-bezier(0.65, 0, 0.35, 1);
      }
    }
  }
}

.navigation {
  width: 100vw;
  height: calc(100vh - 9rem);
  padding: 1.5rem;
  list-style: none;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  position: fixed;
  left: 0;
  top: 9rem;
  z-index: 9999;

  &.-nav-open {
    display: flex;
  }

  li {
    margin-bottom: 2rem;
    text-align: center;

    a {
      font-size: 4rem;
      position: relative;
      z-index: 1;
      transition: color 0.3s cubic-bezier(0.65, 0, 0.35, 1);

      &.router-link-active.router-link-exact-active {
        color: var(--color-primary);

        &:after {
          opacity: 0.2;
          scale: 1;
        }
      }

      &:after {
        content: '';
        width: 4.6rem;
        top: -1.5rem;
        left: -1rem;
        z-index: 0;
        position: absolute;
        opacity: 0;
        aspect-ratio: 1;
        scale: 0.8;
        transition: opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), scale 0.6s cubic-bezier(0.65, 0, 0.35, 1);
        background-color: var(--color-primary);
        clip-path: polygon(100.00% 50.00%, 93.30% 75.00%, 75.00% 93.30%, 50.00% 100.00%, 25.00% 93.30%, 6.70% 75.00%, 0.00% 50.00%, 6.70% 25.00%, 25.00% 6.70%, 50.00% 0.00%, 75.00% 6.70%, 93.30% 25.00%);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex: 2;
    height: auto;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    max-width: initial;
    background: transparent;
    position: initial;
    gap: 13rem;
    li {
      margin-bottom: 0;

      a {
        font-size: 1.8rem;
      }
    }
  }

}

.actions {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  button {
    border: none;
    margin: 1.5rem;
    font-family: var(--text-font-bold);
  }

  @media  screen and (min-width: 1024px) {
    display: none;
  }
}

.mobile-menu {
  display: block;
  font-size: 2rem;
  @media screen and (min-width: 1024px) {
    display: none;
  }
}
</style>