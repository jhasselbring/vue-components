<template>
  <Nav />
  <router-view />
</template>
<script setup>
import { inject } from "vue";
import Nav from "@/components/modules/Nav";
const store = inject("store");
</script>
<style lang="scss">
</style>
