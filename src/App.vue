<template>
  <v-app>
    <AppBar class="mb-15"/>
    <v-container>
      <v-fade-transition mode="out-in">
    
    <router-view />
  </v-fade-transition>

    </v-container>
      
  </v-app>
    
</template>
<script>
import AppBar from './components/AppNavbar.vue'

export default {
  components: {
    AppBar
    
  },
  
};
</script>
