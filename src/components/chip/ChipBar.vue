<script setup>
import { reactive } from 'vue'
// dummy data
const chipAPI = [
  { title: '全部' },
  { title: '直播中' },
  { title: '音樂' },
  { title: '遊戲' },
  { title: '動畫' },
  { title: '最新上傳' },
  { title: '已觀看' }
]

const chipData = reactive([])
fetchChip()

async function fetchChip() {
  try {
    // 模擬向 API 請求資料
    const data = JSON.parse(JSON.stringify(chipAPI))

    // 增加 select 屬性
    for (let chip of data) {
      if (chip.title === '全部') {
        chip.select = true
      } else {
        chip.select = false
      }
    }

    chipData.push(...data)
  } catch (error) {
    console.log(error)
  }
}

function highlightChip(chipTitle) {
  for (let chip of chipData) {
    chip.select = chip.title === chipTitle
  }
}
</script>

<template lang="pug">
.chip-bar.flex(class="md:justify-center md:border-t md:border-b md:border-10-percent")
  //- 探索 chip
  .mx-3.py-2.flex-shrink-0(class="md:hidden")
    .chip.explore.pr-3(class="pl-1.5")
      svg(width="24", height="24", viewbox="0 0 24 24")
        path(
          d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
        )  
      span 探索

  //- chip
  .h-8.mr-3.my-auto.border-r.border-10-percent(class="md:hidden")
  .flex(class="md:justify-center")
    .chip.my-2.mr-3.px-3(
      v-for="(chip, index) in chipData",
      :key="index",
      @click="highlightChip(chip.title)",
      :class="{ select: chip.select }"
    ) {{ chip.title }}
</template>

<style lang="scss" scoped>
.chip-bar {
  height: 48px;
  overflow-y: scroll;
  background-color: white;
}

.chip {
  border-radius: 20px;
  @apply h-8 border border-10-percent text-sm text-main flex-shrink-0 flex items-center cursor-pointer;

  transition: color 0.2s ease, background-color 0.2s ease;
  background-color: rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &.explore {
    border: none;
    border-radius: 0;
  }

  &.select {
    color: #ffffff;
    background-color: #606060;
  }
}

// RWD
// desktop (md)
@media (min-width: 588px) {
  .chip-bar {
    position: sticky;
    top: 56px;
    background-color: var(--brand-background);

    margin-left: 72px;
  }
  
  .chip {
    &.select {
      background-color: #030303;
    }
  }
}
</style>
