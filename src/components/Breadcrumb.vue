<template>
	<el-breadcrumb class="breadcrumb-box" separator="/">
	  <el-breadcrumb-item v-for="item in breadlist" :to="item.href">{{item.name}}</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
	import {mapState,mapGetters, mapMutations, mapActions} from 'vuex';
	export default {
	  data () {
	    return {
	    	breadlist:[]
	    }
	  },
	  watch:{
      '$route':'getList'
    },
	  created(){
	  	this.getList()
	  },
	  methods:{
	  	getBreadcrumbList(obj){
	  		let menuList = obj.menuList,nowPath = obj.nowPath,nowId = obj.nowId;
  			var hasparent = menuList.filter(function(item){
  				if(nowId){
  					return item.id == nowId;
  				}else{
  					return item.href == nowPath;
  				}		
  			})
  			if(hasparent.length){
  				this.breadlist.unshift(hasparent[0])
  				this.getBreadcrumbList({menuList:menuList,nowId:hasparent[0].parernt_id})
  			}
	  	},
	  	getList(){
	  		this.breadlist = [];
	  		let menu = this.$store.state.menuOldJson;
	  		let path = this.$route.path;
	  		this.getBreadcrumbList({menuList:menu,nowPath:path})
	  		console.log(this.breadlist)
	  	}
	  }
	}
</script>

<style scoped="scoped" lang="less">
	.breadcrumb-box{
		padding: 14px;
		position: relative;
		&:before{
			content: " ";
	    position: absolute;
	    left: 0;
	    right: 0;
	    height: 1px;
	    background: #f1f1f1;
	    bottom: 0;
		}
	}
</style>