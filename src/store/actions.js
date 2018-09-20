import * as types from './mutation-type.js';

const actions = {
	[types.NAMEASYN]({commit},{age,name}){
		commit(types.SET_NAME,name)
		commit(types.SET_AGE,age)
	}
}

export default actions;
