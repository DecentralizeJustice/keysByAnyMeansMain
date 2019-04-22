<template>
  <v-flex md4 xs12>
    <v-flex xs12 style="margin:5%;height:65vh;" class="back hidden-sm-and-down">
      <div style="width:100%;padding-bottom: 5%; height:65vh;">
        <img :src="item.img"
          style="height:30%;width:auto;position:relative;margin-top:10%;margin-left:5%;" >
        <div style="width:100%;padding-bottom: 5%;height:50%">
          <div class="titlec" v-html='item.title'>
          </div>
          <div class="textc" v-html='item.text' style="height:20;">>
          </div>
        </div>
        <a :href='item.link'>
        <button class = "bttn-simple bttn-lg" style="background-color:white;color:grey;"
        v-html='item.linkText' ></button>
      </a>
      </div>
    </v-flex>

    <v-flex xs12 class="hidden-md-and-up back">
      <div style="width:100%;padding-bottom: 5%; height:65vh;">
        <img :src="item.img"
          style="height:30%;width:auto;position:relative;margin-top:10%;margin-left:5%;" >
        <div style="width:100%;padding-bottom: 5%;height:50%">
          <div class="titlem" v-html='item.title'>
          </div>
          <div class="textm" v-html='item.text' style="height:20;">>
          </div>
        </div>
        <a :href='item.link'>
        <button class = "bttn-simple bttn-lg" style="background-color:white;color:grey;"
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
font-size: 300%;
font-weight: bold;
}
.textc{
font-size: 200%;
}
.titlem{
font-size: 300%;
font-weight: bold;

}
.textm{
font-size: 200%;
}

</style>
