<template>
  <div class="home-items">
	<v-container class="home-items__container">
	  <card v-for="(product, index) in products" :product="product" :key="index"/>
	</v-container>
  </div>
</template>

<script setup>
// import state from "@/store/state.js";
import Card from "@/components/card.vue";
import {ref} from "vue";

// const boats = ref(state.page?.actionName?.items);
// console.log("page", state.page);
// console.log(state.page)
const products = ref([
  {
	code: 1,
	name: 'Howea',
	image: 'src/assets/home/cards/2.png',
	price: 1000,
	discount: 0
  },
  {
	code: 2,
	name: 'Musa',
	image: 'src/assets/home/cards/1.png',
	price: 1500,
	discount: 0
  },
  {
	code: 3,
	name: 'Zamioculcas',
	image: 'src/assets/home/cards/3.png',
	price: 650,
	discount: 70
  },
  {
	code: 4,
	name: 'Chamaedorea',
	image: 'src/assets/home/cards/4.png',
	price: 860,
	discount: 9
  },
  {
	code: 5,
	name: 'Cactus',
	image: 'src/assets/home/cards/5.png',
	price: 460,
	discount: 0
  },
  {
	code: 6,
	name: 'Orchid',
	image: 'src/assets/home/cards/6.png',
	price: 560,
	discount: 0
  },
  {
	code: 7,
	name: 'Foxtail',
	image: 'src/assets/home/cards/7.png',
	price: 423,
	discount: 0
  },
  {
	code: 8,
	name: 'Epipremnum',
	image: 'src/assets/home/cards/8.png',
	price: 789,
	discount: 0
  }, {
	code: 9,
	name: 'Aglaonema',
	image: 'src/assets/home/cards/9.png',
	price: 666,
	discount: 0
  },
  {
	code: 10,
	name: 'Thuja',
	image: 'src/assets/home/cards/10.png',
	price: 768,
	discount: 23
  },
  {
	code: 11,
	name: 'Gardenia',
	image: 'src/assets/home/cards/11.png',
	price: 230,
	discount: 0
  },
  {
	code: 12,
	name: 'Palm',
	image: 'src/assets/home/cards/12.png',
	price: 1800,
	discount: 13
  },


]);

</script>

<style lang="scss">
.home-items {
  padding-block: 36px 74px;

  @include up($md) {
	padding-block: 44px 164px;
  }

  @include up($xl) {
	padding-block: 120px 200px;
  }

  &__container {
	display: grid;
	gap: 12px;

	@include up($md) {
	  grid-template-columns: repeat(6, 1fr);
	  gap: 20px;
	}

	@include up($xl) {
	  gap: 24px;
	}
  }
}
</style>