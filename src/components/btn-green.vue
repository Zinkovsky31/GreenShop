<template>
  <button class="btn-green">
	{{ text }}
  </button>
</template>
<script>
export default {
  props: {
	text: {
	  type: String,
	  required: true
	}
  }
};
</script>
<style lang="scss">
.btn-green {
  background-color: $green;
  color: $white;
  padding: 10px 20px;
  border: none;
  border-radius: 0 5px 5px 0;
  width:140px;
  height: 50px;
  &:hover{
	opacity: 0.7;
  }
}
</style>