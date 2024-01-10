<template>
  <div class="about-page">
    <SliceZone :slices="doc.slices" :components="components"/>
  </div>
</template>
<script setup lang="ts">
import {usePrismic} from '@prismicio/vue';
import {components} from '~/slices';

const {client} = usePrismic()
const {data: story} = await useAsyncData('story', () => client.getByUID('story', 'story')) as any
const doc = computed(() => story.value.data)
</script>