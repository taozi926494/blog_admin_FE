<template>
	<aside>
		<el-menu default-active="0" class="el-menu-vertical-demo">
			<router-link to="/category">
				<el-menu-item index="0">
		      		<i class="el-icon-menu"></i>分类管理
		        </el-menu-item>
			</router-link>

	        <el-submenu index="1">
	        	<template slot="title"><i class="el-icon-document"></i>文章列表</template>

	         	<el-menu-item-group v-for="category in categoryData" index="category.id">
		     	  <span slot="title">{{category.title}}</span>

		     	  <router-link  v-for="subcate in category.subcate" :to="'/c/' + category.id + '-' + subcate.id">
			     	  <el-menu-item :index="category.id + '-' + subcate.id">
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
		float: left;
		height: 100%;
		width: 201px;
		min-height: 400px;
		border-right: 1px solid #999;
		padding-top: 10px;

		a{color: #666;}
	}
</style>

<script>
	 export default {
	    props: ['categoryData']
	  }
</script>