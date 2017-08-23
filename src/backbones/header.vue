<template>
	<header class="clearfloat">
		<span>Taoz Blog Admin</span>
		<div class="searchbox">
			<el-input
			  placeholder="搜索关键字、文章"
			  icon="search"
			  v-model="search_input"
			  :on-icon-click="handleIconClick">
			</el-input>

		</div>
	</header>
</template>

<style lang="scss">
	$maincolor: #277DD6;
	header {
		width:100%;
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #aaa;
		border-top: 3px solid $maincolor;
		span {
			margin-left: 50px;
		}
		.searchbox {
			position: absolute;
			right: 100px;
			top: 0;

			input {
				width: 250px;
			}
		}
	}
</style>

<script>
	export default {
		data() {
			return {
				search_input: ""
			}
		},
		methods: {
			handleIconClick() {
				alert(this.search_input)
			}
		}
	}
</script>