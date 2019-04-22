<template>
  <div>
  <v-layout row wrap ma-0 pa-0 style="height:90vh;" class="first hidden-sm-and-down">
    <v-flex xs4 style="" class="fullheight">
      <div class="herotext">
        <div class="titlet">Secure Crypto</div>
        <div class="text" v-html='text'></div>
          <button class = "bttn-jelly butt bttn-lg">Start</button>
      </div>
    </v-flex>
    <v-flex xs8 class="fullheight">
      <img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1555918573/keysbyanymeans/undraw_marketing_v0iu_1.svg"
        style="height:auto;width:70%;position:relative;margin-top:10%;margin-left:5%;" >
    </v-flex>
  </v-layout>

  <v-layout row wrap ma-0 pa-0 style="" class=" first hidden-md-and-up">
    <v-flex xs12>
      <div class="herotextm">
        <div class="titlem">Secure Crypto</div>
        <div class="textm" v-html='text'></div>
          <button class = "bttn-jelly butt bttn-lg">Start</button>
      </div>
    </v-flex>
    <v-flex xs12 class="" style="margin-bottom:10%;">
      <img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1555918573/keysbyanymeans/undraw_marketing_v0iu_1.svg"
        style="height:auto;width:80vw;margin-top:10%;margin-left:10vw;" >
    </v-flex>

  </v-layout>
  </div>

</template>

<script>
export default {
  name: 'hero',
  components: {
  },
  data () {
    return {
      text: `Discover the best way to secure your cryptocurrency`
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
.first{
background-color: #6c63ff;
}
.herotext{
margin-top:50%;
margin-left: 20%;
color:white;
width:100%;
}
.herotextm{
color:white;
width:100%;
}
.titlet{
font-size: 500%;
font-weight: bold;
}
.titlem{
font-size: 300%;
font-weight: bold;
}
.text{
font-size: 200%;
}
.textm{
font-size: 200%;
width: 90%;
margin-left: 5%;
}
.butt{
  margin-top: 5%;
}

</style>
