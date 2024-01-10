<template>
  <div class="actions-page">
    <SliceZone :slices="doc.slices" :components="components"/>
  </div>
</template>
<script setup lang="ts">
import {usePrismic} from '@prismicio/vue';
import {components} from '~/slices';

const route = useRoute();

const {client} = usePrismic()

const {data: actions} = await useAsyncData('action', () => client.getByUID('action', route.params.uid as string)) as any
const doc = actions.value.data
</script>