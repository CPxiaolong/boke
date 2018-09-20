<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{$store.state.example.count}}--{{count}}--{{get_name}}--{{countget}}--{{data_count}}</h2>
 		<h1>{{$store.state.menuList}}</h1>
  	<button @click="$store.commit('jia',{a:10})">加</button>
 		<button @click="$store.commit('jian')">减</button>
 		<button @click="jiaplust">jiaplust</button>
  </div>
</template>

<script>
import {mapState,mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  name: 'Vuex',
  data () {
    return {
      msg: 'Welcome to hello2222',
      data_count:this.$store.state.example.count
    }
  },
 /* computed:{
  	count(){
  		return this.$store.state.count
  	}
  }*/
 /*computed:mapState({
 	count:state=>state.count
 })*/
 /*computed:mapState([
 	"count"
 ])*/
	computed:{  
		...mapGetters([   //数组添加法   *****数字属性名要加引号******
      "countget"
    ]),
    ...mapGetters({		//对象添加法
      get_name:"get_name",
    }),
		count(){
			return this.$store.state.example.count
		}
	},
	methods:{
		...mapActions({
			jiaplust:"jiaplust"
		})
	}
}
</script>
