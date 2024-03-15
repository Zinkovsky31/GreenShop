<template>
  <section class="home-intro">
<div class="container">
  <div class="home-intro__text">
	<p class="text-uppercase h4">Welcome to GreenShop</p>
	<h1 class="text-uppercase">Let’s Make a
	  Better <span>Planet</span></h1>
	<p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
  </div>


</div>
  </section>
</template>
<script setup>
</script>
<style lang="scss">
.home-intro{
  margin: 0 auto;
  height: calc(100vh - 80px);
  background-image: url("@/assets/home/bg.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;

  &__text{
	padding: 43px;
	max-width: 1000px;
	span{
	  color: $green;
	}
  }
}

</style>