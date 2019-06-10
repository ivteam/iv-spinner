<template>
  <div class="iv-loading">
    <span class="iv-loading-spinners" :style="style">
      <i class="iv-loading-spinner" v-for="item in balde" :key="item"></i>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: "Spinner",
  data() {
    return {
      balde: 12
    };
  },
  props: {
    size: {
      type: [Number, String],
      default: this.$spin && this.$spin.size || 24
    }
  },
  computed: {
    style() {
      if (!this.size) {
        return;
      }
      const value = `${this.size}px`;
      return {
        width: value,
        height: value
      };
    }
  }
};
</script>

<style lang="css" rel="stylesheet/css">
.iv-loading {
  font-size: 24px;
}

.iv-loading-spinners {
  position: relative;
  display: block;
  width: 1em;
  height: 1em;
}

.iv-loading-spinner {
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 2px;
  height: 25%;
  border-radius: 50% / 20%;
  opacity: 0.25;
  background-color: currentColor;
  animation: spinner-fade 1s linear infinite;
}

.iv-loading-spinner:nth-child(1) {
  animation-delay: 0s;
  transform: rotate(-150deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(2) {
  animation-delay: 0.083s;
  transform: rotate(-120deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(3) {
  animation-delay: 0.144s;
  transform: rotate(-90deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(4) {
  animation-delay: 0.25s;
  transform: rotate(-60deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(5) {
  animation-delay: 0.333s;
  transform: rotate(-30deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(6) {
  animation-delay: 0.417s;
  transform: rotate(0deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(7) {
  animation-delay: 0.5s;
  transform: rotate(30deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(8) {
  animation-delay: 0.583s;
  transform: rotate(60deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(9) {
  animation-delay: 0.667s;
  transform: rotate(90deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(10) {
  animation-delay: 0.75s;
  transform: rotate(120deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(11) {
  animation-delay: 0.833s;
  transform: rotate(150deg) translateY(-150%);
}
.iv-loading-spinner:nth-child(12) {
  animation-delay: 0.917s;
  transform: rotate(180deg) translateY(-150%);
}

@keyframes spinner-fade {
  0% {
    opacity: 0.85;
  }

  50% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
}
</style>