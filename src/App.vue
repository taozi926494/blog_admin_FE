<template>
	<div id="app">
		<v-header class="animated slideInDown"></v-header>
		<div id="mainland" class="clearfloat">
			<v-aside class="animated slideInLeft" :category-data="categoryData"></v-aside>
			<div id="content" class="animated fadeInDown">
					<div class="content-pad">
						<router-view :category-data="categoryData"></router-view>
					</div>
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
	    data() {
	     	return {
	          categoryData: {},
	          activeIndex: ""
	        }
	    },
	    created() {
          // 请求所有分类数据
            var _self = this;
	        axios.get('http://localhost/blog/public/holeadmin/category/index')
	        	.then((data) => {
	        		_self.categoryData = data.data;
	        		_self.activeIndex = _self.getActiveIndex(_self.categoryData);
	        		_self.$root.Bus.$emit('activeIndexChange', _self.activeIndex);
	        	})
	        window.onhashchange = function () {
	        	_self.activeIndex = _self.getActiveIndex(_self.categoryData);
	        	_self.$root.Bus.$emit('activeIndexChange', _self.activeIndex);
	        }
	 	 },
	 	 methods: {
	 	 	/**
	 	 	* 根据categoryData，和url得到当前左边导航栏menu item的 activeindex
	 	 	* @params: categoryData　请求过来的目录数据
	 	 	* @return String (e.g.) '0' => #/categroy ; '1-0-1' => #/list/1-1
	 	 	*/
	 	 	getActiveIndex: function (categoryData) {
        		const router = window.location.hash.substring(2, 10);
		    	const listReg = new RegExp('list/');
		    	var activeIndex = this.activeIndex;
		    	if (router == '' || router == 'category') {
		    		activeIndex = '0';
		    	}else {
		    		if (listReg.test(router)) {
		    			const listId = router.replace(listReg, '').split('-');
		    			var i = 0;
		    			for (; i < categoryData.length; i++) {
		    				if (categoryData[i].id == parseInt(listId[0])) {
		    					break;
		    				}
		    			}
		    			var j = 0
		    			for(j; j < categoryData[i].subcate.length; j++){
		    				if (categoryData[i].subcate[j].id == parseInt(listId[1])) {
		    					break;
		    				}
		    			}
	    				activeIndex = '1' + '-' + i + '-' + j;
		    		}
		    	}
		    	return activeIndex;
	 	 	}
	 	 }
	}
</script>

<style lang="scss">
	@import '~animate.css';
	html, body{
		min-width: 1000px;
	}
	body, header, footer, aside, section,div, ul, li, table, thead, tbody, tfoot, tr, td, th, a, p, h1, h2, h3, h4, h5{
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

	#mainland {
		position: relative;
		box-sizing: border-box;
		border-collapse: separate;

		#content {
			display: table-cell;
			box-sizing: border-box;
			width: 100%;

			.content-pad {
				width: 90%;
				margin: 20px 5%;
			}
		}
	}
</style>