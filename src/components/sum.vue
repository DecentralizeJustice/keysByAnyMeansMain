<template>
  <div>
  <v-layout row wrap ma-0 pa-0 style="height:50vh;" class="hidden-sm-and-down">
    <v-flex xs12 style="" class="fullheight">
      <div class="herotext">
        <div class="titlet" v-html='title'></div>
        <div class="text" v-html='main'> </div>
      </div>
    </v-flex>
  </v-layout>

  <v-layout row wrap ma-0 pa-0 style="" class=" first hidden-md-and-up">
    <v-flex xs12>
      <div class="herotextm">
        <div class="titlem" v-html='title'></div>
        <div class="textm" v-html='main'></div>
      </div>
    </v-flex>
  </v-layout>
  </div>

</template>

<script>
export default {
  name: 'sum',
  components: {

  },
  data () {
    return {
      main: `We have created a tool that allows you to get the best practices from years of crytocurrency experience and apply
    it to your specific use case and threats.`,
      title: `Crypto Security Gets Alot Better`
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
.herotext{
margin-top:5%;
margin-left: 10%;
color:black;
width:80%;
}
.herotextm{
color:black;
margin-top:5%;
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

</style>
