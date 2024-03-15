<template>
  <div class="breadcrumbs nav-size d-flex align-center size-9">
	<v-container>
	<template v-for="(item, index) of items">
	<span v-if="item.url">
        <router-link :to="item.url" class="breadcrumbs__link">{{ item.text }}</router-link>
 </span>
	  <span v-else class="breadcrumbs__text">{{ item.text }}</span>
	  <span v-if="index + 1 < items.length" class="mx-3">/</span>
	</template>
	</v-container>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumbs',
  props: {
	items: {
	  type: Array,
	  required: true
	}
  }
}
</script>
<style lang="scss">
.breadcrumbs {
  margin-top: 26px;
  margin-bottom: 13px;
  //color: $color-grey;
  white-space: nowrap;
  overflow-x: auto;

  &__link {
	color: $black !important;
  }

  &__text {
	cursor: default;
	color: $grey;
  }
}
</style>
<script setup>
</script>