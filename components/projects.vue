<script lang="ts" setup>

const projects = ref([
  { name: 'NFS', href: 'https://nubafs.com', color: '', image: '/images/projects/nfs.png' },
  { name: 'SurpriseMoms', href: 'https://surprise-moms.com', color: '', image: '/images/projects/nfs.png' },
])
</script>
<template>
  <div class="grid grid-column-3 gap-3">
    <div v-for="(project, i) in projects" :key="i" class="p-0 border-neutral-500 border-2">
      <div class="bg-slate-100 p-2">{{ project.name }}</div>
      <img :src="project.image" />
    </div>
  </div>
</template>