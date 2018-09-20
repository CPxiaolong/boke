const state = {
  count: 4
}
const mutations = {
	jia(state, n) {
		state.count += n.a;
	},
	jian(state) {
		state.count--
	}
}
const getters = {
	countget: function(state) {
		return state.count += 100
	}
}
const actions = {
	jiaplust(context) {
		context.commit("jia", {
			a: 1000
		})
	}
}

export default {
	state,
	mutations,
	getters,
	actions
}