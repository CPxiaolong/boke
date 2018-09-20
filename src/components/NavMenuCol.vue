<template>
	<el-aside width="200px" class="xlsidebar" style="background-color: rgb(238, 241, 246)">
	  <el-menu :default-active="this.$route.path" router background-color="#393d49" text-color="#fff" active-text-color="#409eff">
			<el-submenu :index="tab.id"  v-for="tab in formatJson">
				<template slot="title"><i :class="tab.icon"></i>{{tab.name}}</template>
				<el-menu-item v-for="mychild in tab.children" v-if="!mychild.children" :index="mychild.href">{{mychild.name}}</el-menu-item>
				<el-submenu :index="mychild.id" v-for="mychild in tab.children" v-if="mychild.children">
					<template slot="title">{{mychild.name}}</template>
					<el-menu-item v-for="mychildchild in mychild.children"  :index="mychildchild.href">{{mychildchild.name}}</el-menu-item>
				</el-submenu>
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
				{id:"4",parernt_id:"3",name:"Vuex测试",href:"/index/vuexexample"},
				{id:"5",parernt_id:"3",name:"表单测试",href:"/index/formExample"},
				{id:"6",parernt_id:"3",name:"导航测试",href:"/index/navMenuCol"},
			],
			json:{"test":"testvalue"}
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

</style>

