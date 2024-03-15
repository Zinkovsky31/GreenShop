<template>
<!--  <the-header/>-->
  <home-intro/>
  <home-items/>
<!--  <the-footer/>-->
</template>
<script setup>
import TheHeader from "@/components/the-header.vue";
import HomeIntro from "@/views/Home/home-intro.vue";
import HomeItems from "@/views/Home/home-items.vue";
import TheFooter from "@/components/the-footer.vue";

</script>
<style lang="scss">
.home-intro{
  color: $black;
  width: 1800px;
}
.container{
  @include up($xsm) {
	max-width: 900px;
  }
  @include up($sm) {
	max-width: 900px;
  }
  @include up($md) {
	max-width: 900px;
  }
  @include up($lg) {
	max-width: 1800px;
  }
  @include up($xl) {
	max-width: 1800px;
  }
}

</style>