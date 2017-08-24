<template>
	<div id="article_list">
		 <el-table
		    	:data="listData.data"
				:empty-text="empty_text"
		    	style="width: 90%;">
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
		    <el-table-column
		      	prop="options"
		      	label="操作"
		      	width="100">
		      	 <template scope="scope">
			        <el-button type="text" size="small">查看</el-button>
			        <el-button type="text" size="small">编辑</el-button>
			      </template>
		    </el-table-column>
		 </el-table>

		<el-pagination
		    layout="prev, pager, next"
		    :page-count="listData.totalpage">
		 </el-pagination>
	</div>
</template>

<style lang="scss">
	#article_list {
		padding: 60px;
		.el-pagination {
			float: right;
			margin: 20px 10% 20px 0;
		}
	}
</style>

<script>
	import axios from 'axios';
	export default {
		props: ['categoryData'],
		data() {
			return {
				listData: {
					totalpage: 0,
					nowpage: 0,
					data: []
				},
				empty_text: "拼命加载中..."
			}
		},
		mounted: function () {
			var _self = this;
			_self.empty_text = "拼命加载中...";
			axios.get("http://www.easy-mock.com/mock/599a9c0c059b9c566dc9bfaa/blog/list/" + _self.$route.params.categoryid)
				.then((data) => {
					_self.listData = data.data;
				})
				.catch(function (error) {
					_self.empty_text = "Sorry, 暂无数据"
					_self.listData = {
						totalpage: 0,
						nowpage: 0,
						data: []
					}
				})
		},
		watch: {
			$route: function (to, from) {
				var _self = this;
				_self.empty_text = "拼命加载中...";
				axios.get("http://www.easy-mock.com/mock/599a9c0c059b9c566dc9bfaa/blog/list/" + _self.$route.params.categoryid)
				.then((data) => {
					_self.listData = data.data;
				})
				.catch(function (error) {
					_self.empty_text = "Sorry, 暂无数据"
					_self.listData = {
						totalpage: 0,
						nowpage: 0,
						data: []
					}
				})
			}
		}
	}
</script>