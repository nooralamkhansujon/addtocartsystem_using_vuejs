<template>
    <div class="row">
        <!-- start of cart  -->
        <div v-for="(item,index) in items" :key="index" class="card col-md-4 col-sm-6 mb-3">
            <router-link  :to="{path:`product/${item}`}">
                  <img v-bind:src="item.photo" class="card-img-top" alt="">
            </router-link>

            <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">$ {{item.price | replaceDoller}}</p>
                <router-link v-bind:item="item" :to="{path:`product/${item.id}`}" class="btn btn-success float-left">
                  view Details
                </router-link>
                <a @click="addToCart(item)" class="btn btn-primary float-right">
                 + add
                </a>
            </div>
        </div>
        <!-- end of cart  -->
    </div>
</template>

<script>


import axios from 'axios';
export default {
  props:['items'],
  methods:{
      addToCart(item){
        this.$emit("newItemAdded",item);
      },

  },

  mounted(){
     console.log(this.items);
  }

}
</script>

<style scoped>
   .container{
     padding-top:10px;
   }
</style>

