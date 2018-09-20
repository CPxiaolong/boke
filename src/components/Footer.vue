<template>
		<div class="footer-container">{{footername}}</div>
</template>

<script>
	export default{
		name:"Footer",
		data(){
			return{
				footername:"这是一个footer"
			}
		}
	}
</script>

<style scoped="scoped">
	.footer-container{
		margin-left: -200px;
	}
</style>