<template>
	<div id="article_list">
		<i class="el-icon-plus add-aticle" @mouseenter="addArticleMouseEnter" @mouseout="addArticleMouseout"></i>
		 <el-table
		    	:data="listData.data"
				:empty-text="empty_text"
		    	style="width: 100%;">
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
			        <router-link :to=" '/article/' + listData.data[scope.$index].id ">
			        	<el-button type="text" size="small">查看</el-button>
			        </router-link>
			      	<router-link :to=" '/editArticle/' + listData.data[scope.$index].id ">
			      		<el-button type="text" size="small">编辑</el-button>
			      	</router-link>
			      </template>
		    </el-table-column>
		 </el-table>

		<el-pagination
		    layout="prev, pager, next"
		    :page-count="listData.totalpage"
		    :page-size="pageSize"
		    ref="pagination"
		    @current-change="pageChange"
		    :current-page.sync="currentPage">
		 </el-pagination>
	</div>
</template>

<style lang="scss">
	$maincolor: #277DD6;
	#article_list {
		.el-pagination {
			float: right;
			margin: 10px 0;
		}

		.add-aticle {
			position: fixed;
			display: block;
			width: 40px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 20px;
			font-weight: 700;
			color: #fff;
			cursor: pointer;
			background-color: $maincolor;
			border-radius: 90px;
			right: 10px;
			top: 100px;
			z-index: 2;

			&.mouseenter {
				transform: rotate(180deg);
				transition: 0.5s;
			}
			&.mouseout {
				transform: rotate(-180deg);
				transition: 0.5s;
			}

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
				empty_text: "拼命加载中...",
				currentPage: 1,
				pageSize: 15
			}
		},
		mounted: function () {
			var _self = this;
			_self.empty_text = "拼命加载中...";
			axios.get("http://www.easy-mock.com/mock/599a9c0c059b9c566dc9bfaa/blog/list/" + _self.$route.params.categoryid + '/p/' + _self.currentPage + '/n/' + _self.$refs.pagination.pageSize)
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
				axios.get("http://www.easy-mock.com/mock/599a9c0c059b9c566dc9bfaa/blog/list/" + _self.$route.params.categoryid + '/p/' + _self.currentPage + '/n/' + _self.$refs.pagination.pageSize)
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
		},
		methods: {
			pageChange: function () {
				var _self = this;
				_self.empty_text = "拼命加载中...";
				axios.get("http://www.easy-mock.com/mock/599a9c0c059b9c566dc9bfaa/blog/list/" + _self.$route.params.categoryid + '/p/' + _self.currentPage + '/n/' + _self.$refs.pagination.pageSize)
					.then((data) => {
						_self.listData = data.data;
						console.log(data.data)

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
			addArticleMouseEnter: function (event) {
				const reg = new RegExp('\\s+mouseenter|\\s+mouseout', 'g')
				event.target.className = event.target.className.replace(reg, "")
				event.target.className += ' mouseenter'
			},
			addArticleMouseout: function (event) {
				const reg = new RegExp('\\s+mouseenter|\\s+mouseout', 'g')
				event.target.className = event.target.className.replace(reg, "")
				event.target.className += ' mouseout'
			}
		}
	}
</script>