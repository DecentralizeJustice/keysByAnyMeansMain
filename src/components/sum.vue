<template>
  <div>
  <v-layout row wrap ma-0 pa-0 style="height:100%;" class="hidden-sm-and-down">
    <v-flex xs12 style="" class="fullheight">
      <div class="herotext">
        <div class="titlet" v-html='title'></div>
        <div class="text" v-html='main'> </div>
      </div>
    </v-flex>
  </v-layout>

  <v-layout row wrap ma-0 pa-0  class=" first hidden-md-and-up" style="height:70vh;">
    <v-flex xs12>
      <div class="herotextm center">
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
      title: `Crypto Security Made Easier`
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
margin-left: 15%;
color:black;
width:70%;
}
.herotextm{
color:black;
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
color:white;
}
.textm{
font-size: 200%;
width: 90%;
margin-left: 5%;
}
.center{
  position: relative;
top: 50%;
transform: translateY(-50%);
}

</style>
