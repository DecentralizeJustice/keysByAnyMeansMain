<template>
  <v-layout row wrap ma-0 pa-0 align-center justify-space-around style="height:50vh;">

      <featcard v-for="item in data" :key="item.title" v-bind:item='item' />

  </v-layout>
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
          img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1555922547/keysbyanymeans/undraw_open_source_1qxw.svg',
          title: 'Open',
          text: `This entire app is free and opensource.
                The code base can be extened to add new tools and best practes with a simple pr.`,
          link: 'https://www.google.com',
          linkText: 'Github'
        },
        {
          img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1555918573/keysbyanymeans/undraw_marketing_v0iu_1.svg',
          title: 'Custom',
          text: `The methods in this app have been collected from years of crypto experince and follow best practices. `,
          link: 'https://www.google.com',
          linkText: 'Start'
        },
        {
          img: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1555922526/keysbyanymeans/undraw_folder_39kl.svg',
          title: 'Trusted',
          text: `The methods in this app have been collected from years of crypto
                experince and consoldited down for your consumption`,
          link: 'https://www.google.com',
          linkText: 'Start'
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
