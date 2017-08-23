<template>
	<div>
		 	<el-table
		    	:data="listData.data"
		    	style="width: 100%">
		    <el-table-column
		     	prop="title"
		     	label="标题">
		    </el-table-column>
		    <el-table-column
		     	prop="createtime"
		    	label="创建时间">
		    </el-table-column>
		    <el-table-column
		      	prop="prop"
		      	label="属性">
		    </el-table-column>
		  </el-table>

		<el-pagination
		    layout="prev, pager, next"
		    :page-count="listData.totalpage">
		 </el-pagination>
	</div>
</template>
<style>
	
</style>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				listData: {
					totalpage: 0,
					nowpage: 0,
					data: []
				}
			}
		},
		mounted: function(){
			var _self = this;
			axios.get("http://www.easy-mock.com/mock/599a9c0c059b9c566dc9bfaa/blog/list/" + _self.$route.params.categoryid)
				.then((data) => {
					_self.listData = data.data;
				})
		},
		watch: {
			$route: function(to, from){
				var _self = this;
				axios.get("http://www.easy-mock.com/mock/599a9c0c059b9c566dc9bfaa/blog/list/" + _self.$route.params.categoryid)
				.then((data) => {
					_self.listData = data.data;
				})
			}
		}
	}
</script>