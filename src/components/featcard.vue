<template>
  <v-flex md4 xs12>
    <v-flex xs12 style="margin-left:5%;margin-right:5%;height:72vh;margin-top:20%;margin-bottom:7%;"
    class=" back hidden-sm-and-down">
        <img :src="item.img"
          style="height:25vh;width:auto;margin-top:3vh;" >
        <div style="width:90%;height:15vh;margin-left:5%">
          <div class="titlec" v-html='item.title'>
          </div>
          <div class="textc" v-html='item.text' style="">
          </div>
        </div>
        <a :href='item.link'>
        <button class ="bttn-simple bttn-lg" style="background-color:white;color:grey;margin-top:15vh;"
        v-html='item.linkText' ></button>
      </a>

    </v-flex>

    <v-flex xs12 class="hidden-md-and-up back" style="height:100%;">
      <div style="width:100%;padding-bottom: 5%;height:100%;">
        <img :src="item.img"
          style="height:30vh;width:auto;position:relative;margin-top:10%;margin-left:5%;" >
        <div style="width:100%;margin-bottom: 5%;">
          <div class="titlem" v-html='item.title'>
          </div>
          <div class="textm" v-html='item.text' style="">
          </div>
        </div>
        <a :href='item.link'>
        <button class = "bttn-simple bttn-lg" style="background-color:white;color:grey;margin-top:5%;margin-bottom:5%;"
        v-html='item.linkText' ></button>
      </a>
      </div>
    </v-flex>

  </v-flex>

</template>

<script>
export default {
  name: 'featcard',
  props: ['item'],
  components: {

  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.buttonOpt {
  color:  white;
  font-size: 1.4rem;
}
.back{
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}
.titlec{
font-size: 6vh;
font-weight: bold;
}
.textc{
font-size: 3.1vh;
}
.titlem{
font-size: 300%;
font-weight: bold;

}
.textm{
font-size: 200%;
width: 80%;
margin-left: 10%;
}

</style>
