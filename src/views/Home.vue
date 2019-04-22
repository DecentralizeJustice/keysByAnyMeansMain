<template>
  <v-container  text-xs-center fluid ma-0 pa-0 >
    <!-- <toolBar/> -->
    <v-layout row wrap ma-0 pa-0 style="" class="first">
      <hero/>
      <div style="background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);height:100%;">
      <sum/>
      <feat/>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import toolBar from '@/components/toolBar.vue'
import hero from '@/components/hero.vue'
import sum from '@/components/sum.vue'
import feat from '@/components/feat.vue'
export default {
  name: 'home',
  components: {
    hero,
    toolBar,
    sum,
    feat
  }
}
</script>
<style scoped>

</style>
