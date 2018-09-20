import Vue from 'vue'
import Router from 'vue-router'
import Eorr404 from '@/components/Eorr404'
import Login from '@/views/login'
import Index from '@/views/index'
import ProcIndex from '@/views/project/procIndex'
import FormExample from '@/views/formExample'
import Vuexexample from '@/components/Vuexexample'
import NavMenuCol from '@/components/NavMenuCol'
import Table from '@/components/Table'
Vue.use(Router)


export default new Router({
		mode:"history",
		base: __dirname,
  	routes: [
  	{
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
      	{
      		path:'proindex',
      		name: 'ProcIndex',
      		component:ProcIndex
      	},
      	{
      		path:'vuexexample',
      		name: 'Vuexexample',
      		component:Vuexexample
      	},
		    {
		      path: 'formExample',
		      name: 'FormExample',
		      component: FormExample
		    },
		    {
		      path: 'table',
		      name: 'Table',
		      component: Table
		    },
      	{
      		path:'*',
      		component:Eorr404
      	}
      ]
    },
    {
      path: '/*',
      name: 'Eorr404',
      component: Eorr404
    }
  ]
})


