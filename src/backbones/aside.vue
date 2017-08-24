<template>
	<aside>
		<!-- default active 不是响应式的 -->
		<el-menu class="el-menu-vertical-demo" :default-active="activeId">
			<router-link to="/category">
				<el-menu-item index="0">
		      		<i class="el-icon-menu"></i>分类管理
		        </el-menu-item>
			</router-link>

	        <el-submenu index="1">
	        	<template slot="title"><i class="el-icon-document"></i>文章列表</template>

	         	<el-menu-item-group v-for=" (category, cindex) in categoryData" cateid="category.id ">
		     	  <span slot="title">{{category.name}}</span>

		     	  <router-link  v-for=" (subcate, sindex) in category.subcate " :to="'/list/' + category.id + '-' + subcate.id">
			     	  <el-menu-item :index=" '1' + '-' + cindex + '-' + sindex ">
			     	 	 {{subcate.name}}
			     	  </el-menu-item>
		     	  </router-link>
			   	</el-menu-item-group>
	    	 </el-submenu>

	    </el-menu>
	</aside>
</template>

<style lang="scss">
	aside{
		display: table-cell;
		height: 100%;
		min-width: 201px;
		border-right: 1px solid #999;
		padding-top: 10px;

		a {color: #666;}
		&:after {content:"."; display:block; height:0; visibility:hidden; clear:both; }
	}
</style>

<script>
	export default {
	    props: ['categoryData'],
	    data () {
	    	return {
	    		activeId: '',
	    	}
	    },
	    created: function() {
	    	var _self = this;
	    	_self.$root.Bus.$on('activeIndexChange', function(activeindex){
	    		_self.activeId = activeindex;
	    	})
	    }
	  }
</script>