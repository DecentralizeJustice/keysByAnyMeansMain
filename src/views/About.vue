<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Decentralize Justice</v-toolbar-title>
    </v-toolbar>
    <v-container fluid text-xs-center grid-list-xl>
      <v-layout
        justify-center row
        wrap class="my-5"
        align-center fill-height
      >
        <v-flex xs12 sm12 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">We are a company dedicated to creating services that are open and rigorous.</h2>
          </div>
        </v-flex>

        <v-flex xs12 md4  v-for="(item, key) in items" :key="item.id">
          <v-card>
             <v-img
               v-bind:src="item.photo"
               aspect-ratio="2"
             ></v-img>
           <v-card-title primary-title class="justify-center">
             <div>
               <h3 class="headline mb-0">{{ item.name }}</h3>
             </div>
           </v-card-title>
           <v-card-actions class="justify-center">
             <v-btn flat color="orange" v-bind:href="item.link">{{ key }}</v-btn>
           </v-card-actions>
         </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: {
        'Multisig': { name: 'Multisig Crypto', link: 'https://www.multisigcrypto.com/', photo: 'https://images.pexels.com/photos/1055336/pexels-photo-1055336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        'F Wallet': { name: 'Frequent Wallet', link: 'https://frequentwallet.com/', photo: 'https://images.pexels.com/photos/1061579/pexels-photo-1061579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        'Read': { name: 'Blog', link: 'https://www.decentralizejustice.com/blog', photo: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        'Build': { name: 'Decentralized Best Practices', link: 'https://www.decenbestpractices.com', photo: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        'Study': { name: 'Project Management', link: 'https://www.decentralizejustice.com/projectm/', photo: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        'R & D': { name: 'Research and Development', link: 'http://www.decentralizejustice.com/randd', photo: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        'Explore': { name: 'Business Management', link: 'https://www.decentralizejustice.com/busi', photo: 'https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        'Learn': { name: 'Operations', link: 'https://www.decentralizejustice.com/opdocs', photo: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }

      }
    }
  }
}
</script>
