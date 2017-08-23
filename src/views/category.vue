<template>
	<div>
		<ul class="category_dad">
			<li v-for="category in categoryData">
				<ul>
					<li class="title">{{category.name}} <i class="el-icon-edit" @click="edit(category)"></i>
					</li>
					<li v-for="subcate in category.subcate">
						{{subcate.name}} <i class="el-icon-edit" @click="edit(subcate)"></i><i class="el-icon-circle-close" @click="del(subcate)"></i>
					</li>
					<li>
						<el-button type="primary" size="small" @click="add('son')">添加子分类</el-button>
					</li>
				</ul>
			</li>
			<li class="add-dad">
				<el-button type="primary" size="small" @click="add('dad')">添加父级分类</el-button>
			</li>
		</ul>

		<!-- 标题编辑 dialog -->
		<el-dialog :title="editData.name" :visible.sync="editVisible" :modal-append-to-body="false">

		  <el-form :model="editData">
		    <el-form-item label="分类名称" :label-width="formLabelWidth">
		      <el-input v-model="editData.name" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="editVisible = false">取 消</el-button>
		    <el-button type="primary" @click="editVisible = false">确 定</el-button>
		  </div>
		</el-dialog>

		<!-- 子标题删除提示 -->
		<el-dialog
		  title="注意"
		  :visible.sync="delVisible"
		  size="tiny"
		  :modal-append-to-body="false"
		  >
		  <span>确定删除子分类{{delData.name}} ?</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="delVisible = false">取 消</el-button>
		    <el-button type="primary" @click="delVisible = false">确 定</el-button>
		  </span>
		</el-dialog>

		<!-- 标题添加 dialog -->
		<el-dialog :title=" isDad == true ? '添加父级分类' : '添加子分类' " :visible.sync="addVisible" :modal-append-to-body="false">

		  <el-form :model="addData">
		    <el-form-item label="分类名称" :label-width="formLabelWidth">
		      <el-input v-model="addData.name" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="addVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addVisible = false">添 加</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	 export default {
	    data: function(){
	    	return {
	    		isDad: true,
	    		// Edit Form
	    		editVisible: false,
	    		editData: {
		        	id: "",
		        	name: "",
		        },
		        formLabelWidth: '120px',

		        // delete Form
		        delVisible: false,
		        delData: {
		        	id: "",
		        	name: "",
		        },

		        // add Form
		        addVisible: false,
		        addData: {
		        	name: ""
		        }
	    	}
	    },
	    props: ['categoryData'],
	    methods: {
		  	edit: function(category) {
		  		console.log(category.hasOwnProperty('subcate'))
		  		this.editData.id = category.id;
		  		this.editData.name = category.name;
		  		this.editVisible = true;
		  	},
		  	del: function(category) {
		  		this.delData.id = category.id;
		  		this.delData.name = category.name;
		  		this.delVisible = true;
		  	},
		  	add: function(objname) {
		  		if (objname == "dad") {
		  			this.isDad = true;
		  		} else if (objname == "son") {
		  			this.isDad = false;
		  		}
		  		this.addVisible = true;

		  	}
		  }
	  }
</script>

<style lang="scss">
	$maincolor: #277DD6;
	.category_dad {
		width: auto;
		margin: 0 auto;

		 li{
			width: 200px;
			line-height: 50px;
			float: left;
			text-align: center;

			&.add-dad{
				border-bottom: 1px solid #333; 
				width:100px;
			}
		}

		.title {
			font-weight: 700;
			border-bottom: 1px solid #333
		}
		.el-icon-edit {
			color: $maincolor;
			cursor: pointer;
			padding-left:6px;
		}
		.el-icon-circle-close {
			color: red;
			cursor: pointer;
			padding-left: 6px;
		}
	}
</style>