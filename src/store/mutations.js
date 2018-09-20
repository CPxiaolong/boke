import * as types from './mutation-type.js';

export default{
	[types.SET_NAME](state,name){
		state.name = name;
	},
	[types.SET_AGE](state,age){
		state.age = age;
	},
	[types.FORMAT_MENULIST](state,obj){
		state.menuOldJson = obj.json;
		var a =obj.json,idStr=obj.idStr,pidStr=obj.pidStr,chindrenStr =obj.chindrenStr;
		var r = [], hash = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = a.length;    
	    for(; i < len; i++){    
	        hash[a[i][id]] = a[i];    
	    }    
	    for(; j < len; j++){    
	        var aVal = a[j], hashVP = hash[aVal[pid]];    
	        if(hashVP){    
	            !hashVP[children] && (hashVP[children] = []);
	            hashVP[children].push(aVal);    
	        }else{    
	            r.push(aVal);    
	        }    
	    }   
		state.menuList = r;  
	}
}

