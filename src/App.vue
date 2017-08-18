<template>
	<div>
		<v-header></v-header>
	  	<div id="app">

		    <router-link to="/index">index</router-link>
		    <router-link to="/second">second</router-link>
		    <router-view></router-view>
		  </div>
	</div>
</template>

<script>
	import vHeader from './components/header.vue'
	export default {
	  name: 'app',
	  components: {
	  	vHeader
	  }
	}
</script>

<style lang="scss">
body, div, ul, li, table, td, a, p, h1, h2, h3, h4, h5{
	margin: 0;
	padding: 0;
}
#app{
	width: 600px;
	height: 700px;
	margin: 20px auto;
}
</style>