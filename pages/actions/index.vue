<template>
  <div class="actions-page">
    <SliceZone :slices="doc.slices" :components="components"/>
  </div>
</template>
<script setup lang="ts">
import {usePrismic} from '@prismicio/vue';
import {components} from '~/slices';

const {client} = usePrismic()
const {data: actions} = await useAsyncData('actions', () => client.getByUID('actions', 'actions')) as any
const doc = computed(() => actions.value.data)
</script>