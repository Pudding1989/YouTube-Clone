<script setup>
import Header from '@/components/Header/Header.vue'
import ChipBar from '@/components/chip/ChipBar.vue'
import MiniGuide from "@/components/Guide/MiniGuide.vue";
import Content from "../components/MainContent/Content.vue";
</script>

<template lang="pug">
Header/
ChipBar/
MiniGuide/
Content/
</template>

<style lang="scss">
body {
  --mobile-header-height: 48px;
  --desktop-header-height: 56px;

  // for desktop header、chip bar
  --brand-background: rgba(255, 255, 255, 0.98);

  // for desktop header、chip bar
  --brand-background: rgba(255, 255, 255, 0.98);
}
</style>
