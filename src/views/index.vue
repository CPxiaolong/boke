<template>
	<el-container>
		<el-header>
			<my-header></my-header>
		</el-header>
		<el-container>
			<my-sidebar></my-sidebar>
			<el-container>
				<Bradcrumb></Bradcrumb>
				<router-view/>
				<el-footer class="myfooter">
					<procfooter></procfooter>
				</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script type="text/javascript">
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
	import procfooter from '@/components/Footer'
	import mySidebar from '@/components/Sidebar'
	import myHeader from '@/components/Header'
	import Bradcrumb from '@/components/Breadcrumb'
	import pub from '../assets/js/basic.js'
	export default {
		data() {
			return {
			
			}
		},
		created() {
		},
	  components:{
	  	procfooter,
	  	mySidebar,
	  	myHeader,
	  	Bradcrumb
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	@import '../assets/css/basic.less';
	
	.el-header, .el-footer {
    background-color: @basic-bgcolor;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: @down-bgcolor !important;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .xlsidebar:before{
  	background-color: @down-bgcolor !important;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container .el-aside{
    line-height: 260px;
  }
 
</style>