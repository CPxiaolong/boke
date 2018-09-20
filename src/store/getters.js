const getters = {
	get_name:function(state){
		return state.name +'计算了' 
	},
	get_count:function(state){
		return state.age +'计算了' 
	}
}
export default getters;