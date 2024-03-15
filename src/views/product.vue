<template>
  <div class="product">
	<breadcrumbs :items="breadcrumbItems"/>
	<product-intro/>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import Breadcrumbs from "@/components/breadcrumbs.vue";
import ProductIntro from "@/views/Product/product-intro.vue";

const route = useRoute();
console.log("$route.params", route);
const routeParams = route.params;

const breadcrumbItems = [
  { text: 'Home', url: '/' },
  { text: 'Shop', url: '' },
];
</script>