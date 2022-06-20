<template lang="pug">
.content.h-full.flex.flex-wrap.justify-between(
  class="md:bg-general md:mt-0 md:pt-6 md:px-4"
)
  .video.m-0(v-for="(n, index) in 20", :key="index", class="md:mx-2 md:mb-10")
    router-link.thumbnail(to="/")
      img.w-full.object-cover(src="@/assets/thumbnail/thumbnail-1.jpeg")
    .detail.m-3.flex.mt-1(class="md:mt-3")
      router-link.channel.h-10.w-10.flex-shrink-0(to="/")
        img.object-cover(src="@/assets/channel/channel-1.jpeg")
      .flex.w-full
        .meta.ml-3.flex-grow
          router-link(to="/")
            h3.text-sm.text-main WWDC 2022 - June 6 | Apple
            .info
              span(class="md:block") Apple
              span.dot(class="md:hidden") •
              span 觀看次數：705萬次
              span •
              span 1天前
        .menu.flex-shrink-0
          button.p-2
            svg(width="24", height="24", viewbox="0 0 24 24")
              path(
                d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
              )
</template>

<style lang="scss" scoped>
.content {
  transition: background-color 3.5s ease;
}

.video {
  width: 100%;
  a.channel {
    border-radius: 50%;
    overflow: hidden;
  }

  h3 {
    margin-bottom: 3px;

    font-weight: 500;
    line-height: 17.5px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .info {
    span {
      @apply text-xs text-secondary mr-1;
    }
  }
}

// RWD
// mobile layout (sm)
@media (min-width: 320px) {
  .video {
    .detail {
      margin-left: 12px;
      margin-bottom: 16px;
    }
  }
}

// desktop layout (md)
@media (min-width: 588px) {

  .content {
    margin-left: 72px;
  }

  .video {
    width: calc(50% - 16px);

    .detail {
      margin-left: 0;
      margin-bottom: 0px;
    }

    .info {
      span {
        margin-right: 0;
        word-break: keep-all;
      }

      span:nth-last-child(2) {
        margin: 0 4px;
      }
    }
  }
}

// lg
@media (min-width: 874px) {
  .video {
    width: calc(33.3% - 16px);
  }
}

// xl
@media (min-width: 1160px) {
  .video {
    width: calc(25% - 16px);
  }
}
</style>