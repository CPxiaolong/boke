<template>
  <div>
		<el-button type="primary"><router-link :to="proUrl">登陆</router-link></el-button>
  </div>
</template>
 
<script type="text/javascript">
	import pub from '../assets/js/basic.js';
	export default {
	  data () {
	    return {
	      proUrl: "/index/proindex"
	    }
	  },
	  created(){
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*@import '../assets/css/style.css'; 引入css样式 */

</style>
