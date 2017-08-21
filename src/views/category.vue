<template>
	<div>
		<ul class="category_dad">
			<li v-for="category in categoryData">
				<ul>
					<li class="title">{{category.title}}</li>
					<li v-for="subcate in category.subcate">
						{{subcate.name}}
					</li>
					<li><el-button type="primary" size="small">添加子分类</el-button></li>
				</ul>
			</li>
			<li class="add-dad"><el-button type="primary" size="small">添加父级分类</el-button></li>
		</ul>
	</div>
</template>

<script>
	 export default {
	    props: ['categoryData']
	  }
</script>

<style lang="scss">
	$maincolor: #277DD6;
	$hovermain: #575DD6;
	.category_dad{
		width: auto;
		margin: 0 auto;

		 li{
			width: 200px;
			height: 40px;
			line-height: 40px;
			float: left;
			text-align: center;

			&.add-dad{
				border-bottom: 1px solid #333; 
				width:100px;
			}
		}

		.title{
			font-weight: 700;
			border-bottom: 1px solid #333
		}
	}
</style>