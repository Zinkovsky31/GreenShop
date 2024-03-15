<template>
  <div class="layout-main">
	<the-header/>
	<main>
	  <router-view/>

	</main>
	<the-footer/>
  </div>
</template>

<script >
import TheHeader from "@/components/the-header.vue";
import TheFooter from "@/components/the-footer.vue";

export default {
  name: 'layout-main',
  components: { TheFooter, TheHeader},

}
</script>
