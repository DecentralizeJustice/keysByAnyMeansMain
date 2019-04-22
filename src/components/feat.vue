<template>
  <div>
  <v-layout row wrap ma-0 pa-0 align-center justify-space-around style="height:50vh;" class="hidden-sm-and-down">

      <featcard v-for="i in 3" />

  </v-layout>

  <v-layout row wrap ma-0 pa-0 style="" class=" first hidden-md-and-up">
    <v-flex xs12>

    </v-flex>
  </v-layout>
  </div>

</template>

<script>
import featcard from '@/components/featcard.vue'
export default {
  name: 'feat',
  components: {
    featcard
  },
  data () {
    return {
      data: [
        {
          img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1555922547/keysbyanymeans/undraw_open_source_1qxw.svg'
        }
      ]

    }
  }
}
</script>
<style scoped>
.buttonOpt {
  color:  white;
  font-size: 1.4rem;
}
.fullheight{
  height:100%;
}
.titlet{
font-size: 500%;
font-weight: bold;
}
.titlem{
font-size: 300%;
font-weight: bold;
}

</style>
