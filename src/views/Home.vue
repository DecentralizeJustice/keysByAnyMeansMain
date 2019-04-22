<template>
  <v-container  text-xs-center fluid ma-0 pa-0 >
    <v-layout row wrap ma-0 pa-0 style="height:90vh;" class="first">
      <hero/>
    </v-layout>
  </v-container>
</template>

<script>
import hero from '@/components/hero.vue'
export default {
  name: 'home',
  components: {
    hero
  }
}
</script>
<style scoped>


</style>
