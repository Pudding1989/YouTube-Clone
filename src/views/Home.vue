<template lang="pug">
main
  Header/
  ChipBar/
  MiniGuide/
  Content/
</template>

<style lang="scss">
main {
  --mobile-header-height: 48px;
  --desktop-header-height: 56px;

  // for desktop header、chip bar
  --brand-background: rgba(255, 255, 255, 0.98);
}
</style>

<script>
import Header from "@/components/Header/Header.vue";
import MiniGuide from "@/components/Guide/MiniGuide.vue";
import ChipBar from "@/components/Chip/ChipBar.vue";
import Content from "@/components/MainContent/Content.vue";

export default {
  name: "Home",
  components: { Header, MiniGuide,ChipBar,Content },
};
</script>
