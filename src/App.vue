<template>
	<div id="app">
		<v-header class="animated slideInDown"></v-header>
		<div id="mainland" class="clearfloat">
			<v-aside class="animated slideInLeft" :category-data="categoryData"></v-aside>
			<div id="content" class="animated fadeInDown clearfloat">
				<router-view :category-data="categoryData"></router-view>
			</div>
		</div>
		<v-footer class="animated slideInUp"></v-footer>
	</div>
</template>

<script>
	import vHeader from './backbones/header.vue';
	import vAside from './backbones/aside.vue';
	import vFooter from './backbones/footer.vue';
	import axios from 'axios';

	export default {
	  name: 'app',
	  components: {
	  	vHeader,
	  	vAside,
	  	vFooter,
	  },
	  created() {
        // 请求所有分类数据
        var _self = this;
        axios.get('http://www.easy-mock.com/mock/599a9c0c059b9c566dc9bfaa/blog/admin/category')
        	.then((data) => {
        		_self.categoryData = data.data
        	})
	  },
	  data() {
	  	return {
	        categoryData: {}
	      }
	  }
	}
</script>

<style lang="scss">
	@import '~animate.css';
	html, body{
		min-width: 1000px;
	}
	body, header, footer, aside, section,div, ul, li, table, thead, tbody, tfoot, td, th, a, p, h1, h2, h3, h4, h5{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	#app{
		height: 100%;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.clearfloat:after {content:"."; display:block; height:0; visibility:hidden; clear:both; }
	.clearfloat { *zoom:1; }

	#mainland{
		width: 100%;
		position: relative;

		#content{
			display: table-cell;
			width: 100%;
			padding: 40px 40px 0 40px;
		}
	}
</style>