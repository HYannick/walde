<script setup lang="ts">
import {type Content} from "@prismicio/client";
import type {Ref} from 'vue';
import {ActionEntry} from './ActionEntry';

const props = defineProps(
    getSliceComponentProps<Content.ActionResumeSlice>([
      "slice",
      "index",
      "slices",
      "context",
    ]),
);
const slice = computed(() => props.slice);

const isAnimating = ref(false);
const currentActionIndex = ref(0);
const currentAction: Ref<ActionEntry | null> = ref(null);
const actions: Ref<ActionEntry[]> = ref([]);

const updateAction = (newEntry: ActionEntry) => {
  isAnimating.value = true;
  return Promise.all([
    currentAction.value!.hide(),
    newEntry.show(),
  ]).then(() => {
    currentAction.value!.DOM.el.classList.remove('actions-description-item--current');
    newEntry.DOM.el.classList.add('actions-description-item--current');
    currentAction.value = newEntry;
    isAnimating.value = false;
  })
};

const matchId = (index: number) => index === currentActionIndex.value

const setAction = async (index: number) => {
  if (isAnimating.value || index === currentActionIndex.value) return;
  currentActionIndex.value = index;
  const newEntry = actions.value[index];
  await updateAction(newEntry);
}

onMounted(() => {
  const actionItems = Array.from(document.querySelectorAll('.actions-description-item'))
  actionItems[0].classList.add('actions-description-item--current')
  actions.value = Array.from(actionItems, (el) => new ActionEntry(el))
  currentAction.value = actions.value[currentActionIndex.value]
})
</script>

<template>
  <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
  >
    <div class="actions-section">
      <div class="bg-polygon"></div>
      <div class="actions-intro">
        <PrismicRichText class="text -title-1" :field="slice.primary.title"/>
        <PrismicRichText class="text -large-body -light action-intro-description" :field="slice.primary.description"/>
        <NuxtLink :to="slice.primary.link.uid" class="link">Voir toutes nos actions</NuxtLink>
      </div>
      <div class="actions-details">
        <div class="actions-items">
          <div class="actions-item" v-for="(action, i) in slice.items" @click="setAction(i)" :class="{'-active': matchId(i)}">
            <PrismicRichText class="text -title-2" :field="action.name"/>
          </div>
        </div>
        <div class="action-description-list">
          <div class="actions-description-item" v-for="action in slice.items" ref="descriptionItem">
            <div class="ov-hidden">
              <div class="action-description">
                <PrismicRichText class="action-description-title text -title-2" :field="action.name"/>
                <PrismicRichText class="text -large-body description" :field="action.description"/>
                <NuxtLink :to="action.link.uid" class="link">En savoir plus</NuxtLink>
              </div>
            </div>
            <div class="action-picture">
              <PrismicImage :field="action.picture"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

.bg-polygon {
  background-color: var(--color-actions-background);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  clip-path: polygon(0 2%, 100% 0%, 100% 100%, 0 98%);
  z-index: -1;
  transform: scale3d(1, 1.1, 1);

  @media screen and (min-width: 1200px) {
    clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0 90%);
    transform: scale3d(1, 1.7, 1);
  }
}

.actions-intro {
  max-width: 120rem;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 1.5rem;

  .action-intro-description {
    margin: 10rem 0 5rem;
    text-align: justify;
  }

  @media screen and (min-width: 1200px) {
    text-align: center;
    .action-intro-description {
      text-align: center;
    }
  }
}

.actions-section {
  margin: 30rem 0;
  position: relative;

  .link {
    color: var(--color-actions-text);
  }

  .text {
    color: var(--color-actions-text);
  }

  .actions-details {
    display: flex;
    gap: 6rem;
    max-width: 120rem;
    width: 100%;
    margin: 10rem auto 0;
  }

  .action-description-list {
    width: 100%;
  }

  .actions-description-item {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 6rem;
    flex-direction: column;
    z-index: 0;
    padding: 1.5rem;
    margin-bottom: 10rem;

    @media screen and (min-width: 1200px) {
      padding: 0;
      position: absolute;
      text-align: left;
      flex-direction: row;
      margin-bottom: 0;
    }

    .ov-hidden {
      flex: 1;
      padding-bottom: 1rem;
      order: 2;
      @media screen and (min-width: 1200px) {
        order: 1;
      }
    }

    .action-picture {
      order: 1;
      @media screen and (min-width: 1200px) {
        order: 2;
      }
    }

    .action-description .description {
      margin-bottom: 5rem;
    }

    &:not(.actions-description-item--current) {
      .action-description, .action-picture > img {
        opacity: 1;
        @media screen and (min-width: 1200px) {
          opacity: 0;
        }
      }
    }
  }

  .action-picture {
    aspect-ratio: 1;
    clip-path: var(--controls-clip-path);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 33rem;
    height: 33rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.action-description-title {
  display: block;
  margin-bottom: 2rem;
  @media screen and (min-width: 1200px) {
    display: none;
  }
}

.actions-items {
  display: none;
  border-right: 0.1rem solid var(--color-grey);

  .actions-item {
    margin-bottom: 2rem;
    cursor: pointer;

    &.-active, &:hover {
      .text {
        color: var(--color-primary);
      }
    }
  }

  @media screen and (min-width: 1200px) {
    display: block;
  }
}
</style>