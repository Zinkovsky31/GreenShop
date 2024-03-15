<template>
  <section class="product-intro">
	<v-container>
	  <v-row>
		<v-col cols="6">
		</v-col>
		<v-col cols="6"> Карточка </v-col>
	  </v-row>
	</v-container>
  </section>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';


const store = useStore();
const products = computed(() => store.state.products);

console.log("products", store);
</script>
<style lang="scss">
.product-intro{
  height: 90vh;
}
</style>