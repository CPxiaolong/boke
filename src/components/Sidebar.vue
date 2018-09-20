<template>
	<el-aside width="200px" class="xlsidebar" style="background-color: rgb(238, 241, 246)">
	  <el-menu :default-active="this.$route.path" router background-color="#393d49" text-color="#fff" active-text-color="#409eff">
				<template v-for ="menu in formatJson">
	      	  <el-submenu v-if="menu.children" :index="menu.id">
	      	  		<template slot="title">
				          <i :class="menu.icon"></i>
				          <span>{{menu.name}}</span>
				        </template>
	      	  	 	<template v-for ="menuChildren in menu.children">
	      	  	 			<el-menu-item :index="menuChildren.href" >{{menuChildren.name}}</el-menu-item>
	      	  	 	</template>
	      	 	</el-submenu>
	      	 	<el-menu-item v-else :index="menu.href" >
	      	 		 	<i :class="menu.icon"></i>
	        			<span slot="title">{{menu.name}}</span>
	      	 	</el-menu-item>
	      </template>
			</el-submenu>
		</el-menu>
	</el-aside>
</template>

<script>
import {mapState,mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  name: 'Sidebar',
  data () {
    return {
    	menuJson:[	
			  {id:"1",parernt_id:"0",name:"导航一",icon:"el-icon-message"},
				{id:"2",parernt_id:"1",name:"首页",href:"/index/proindex"},
				{id:"3",parernt_id:"0",name:"导航二",icon:"el-icon-menu"},
				{id:"5",parernt_id:"3",name:"表单测试",href:"/index/formExample"},
				{id:"6",parernt_id:"3",name:"表格测试",href:"/index/Table"},
			]
    }
  },
  computed:{
  	formatJson(){
  		return this.$store.state.menuList
  	}
  },
	created(){
		this.getjson({
			json:this.menuJson,
			idStr:"id",
			pidStr:"parernt_id",
			chindrenStr:"children"
		})
	},
  methods:{
  	...mapMutations({
  		getjson:"FORMAT_MENULIST"
  	})
  }
}
</script>
<style scoped="scoped">
	.el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
  }
	.xlsidebar>ul{
  	position: fixed;
    top: 60px;
    width: 199px;
	  }
	.xlsidebar:before{
		content: "";
	    display: block;
	    width: inherit;
	    position: absolute;
	    top: 0px;
	    bottom: 0;
	    z-index: -1;
	    background-color: inherit;
	}
</style>

