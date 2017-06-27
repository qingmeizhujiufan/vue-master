<template>
  <div id="app">
  	<transition
    name="custom-classes-transition"
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
  >
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>	
export default {
  name: 'app'
}
</script>
