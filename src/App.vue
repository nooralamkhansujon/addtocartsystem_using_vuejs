<template>
  <div id="app">
<!--
       <router-link :to="{path: '/'}">Home</router-link>
       <router-link :to="{path: '/test/1'}">Test</router-link>
       <router-link :to="{path: '/test/2'}">Test</router-link>
       <router-link :to="{path: '/test/3'}">Test</router-link>
       <router-view></router-view> -->


       <Navbar  @search="search"></Navbar>
      <!-- start of row  -->
      <div class="container mt-3">
        <div class="row">
           <div class="col-md-9 col-sm-12">
              <!-- <Inventory @newItemAdded="addCartItem" :items="items"></Inventory> -->
              <router-view @newItemAdded="addCartItem" :items="items"></router-view>
          </div>
          <div class="col-md-3 col-sm-12">
            <Cart @removeItem="removeItem" :items="cart"></Cart>
          </div>
      </div>
    </div>
  </div>
  <!-- end of row  -->
</template>


<script>
import Navbar from './components/Navbar.vue';
import Cart from './components/Cart.vue';
import data from './data.js';

export default {
  name: 'App',
  components:{
     Navbar,
     Cart
  },
  data(){
     return {
        items:[],
        cart:[],
     }
  },
  methods:{
     addCartItem(item){
       item.price  = item.price.replace(/\$/,'');
       this.cart.push(item);
     },
     removeItem(index){
        this.cart.splice(index,1);
     },
     search(keyword){
         this.items = data.filter(item=>{
            return  item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
         });
     }
  },
  mounted(){
    this.items = data;
  }
}
</script>

<style scoped>
   .container{
     padding-top:10px;
   }
</style>
