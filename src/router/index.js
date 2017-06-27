import Vue from 'vue'
import Router from 'vue-router'
import Index from '../../views/pub/Index'
import Search from '@/components/Search'
import DeviceHome from '../../views/device/deviceHome'
import DeviceApproachNotice from '../../views/device/deviceApproachNotice'
import DeviceProviderHome from '../../views/deviceProvider/deviceProviderHome'

Vue.use(Router)

export default new Router({
	linkActiveClass: '',
  mode: 'history',
  routes: [
  	{
      path: '/',
      name: 'Index',
      component: Index
   	},
   	{
      path: '/deviceHome',
      name: 'deviceHome',
      component: DeviceHome
   	},
   	{
      path: '/deviceApproachNotice',
      name: 'deviceApproachNotice',
      component: DeviceApproachNotice
   	},
   	{
      path: '/deviceProviderHome',
      name: 'DeviceProviderHome',
      component: DeviceProviderHome
   	},
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
