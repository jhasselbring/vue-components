<template>
  <div class="tto-container">
    <slot />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.tto-container{
  overflow: hidden;
}
@media screen and (max-width: 640px) {
  .tto-container {
    display: block;
    width: 100%;
  }
}
@media screen and (min-width: 641px) and (max-width: 992px) {
  .tto-container {
    display: inline-block;
    width: 50%;
  }
}
@media screen and (min-width: 993px) {
  .tto-container {
    display: inline-block;
    width: 33%;
  }
}
</style>