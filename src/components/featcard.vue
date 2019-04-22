<template>
  <v-flex md3 xs12>
    <v-flex xs12 style="" class="fullheight hidden-sm-and-down">
      <div style="background-color:blue;width:100%;">
        <img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1555922547/keysbyanymeans/undraw_open_source_1qxw.svg"
          style="height:auto;width:80%;position:relative;margin-top:10%;margin-left:10%;" >
        <div>
          <div>
            Open Source
          </div>
          <div>
            The entire program is free and opensource.
            The code base can be extened to add new tools and best practes with a simple pr.
          </div>
        </div>
      </div>
    </v-flex>

    <v-flex xs12 class="hidden-md-and-up">

    </v-flex>

  </v-flex>

</template>

<script>
export default {
  name: 'featcard',
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
