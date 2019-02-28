<template>
  <v-container  text-xs-center fluid  >
      <v-flex xs12 ma-0 pa-0 hidden-sm-and-down style="overflow: hidden;z-index:-1;">
        <video style="
        position: fixed;
        right: 0;
        bottom: 0;
        overflow: hidden;
        width: auto;
        height: auto;"
        src="https://res.cloudinary.com/dylevfpbl/video/upload/v1551009310/decenMain/yes.mp4" autoplay muted loop/>
        <v-flex class="title" xs8 offset-xs2 pa-2 >
          <div class="display-4 white--text text-xs-center" >
            Decentralize Justice
          </div>
          <br>
          <div class="text-xs-center">
            <v-btn flat class="buttonOpt"><router-link to="/about">About</router-link></v-btn>
            <v-btn flat class="buttonOpt"><a href="https://www.decentralizejustice.com/blog">Blog</a></v-btn>
          </div>
        </v-flex>
      </v-flex>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  }
}
</script>
<style scoped>
a{
  text-decoration: none;
  color:black;
}
.title{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(169,169,169,.9);
  /* border-radius: 3%; */
}
.buttonOpt {
  color:  black;
  font-size: 1.4rem;
}
</style>
