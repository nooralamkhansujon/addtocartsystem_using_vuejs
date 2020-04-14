<template>

      <div class="row">
        <!-- start of cart  -->
        <div v-for="(item,index) in items" :key="index" class="card col-md-4 col-sm-6">
          <img v-bind:src="item.photo" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">$ {{item.price | replaceDoller}}</p>
                <a @click="addToCart(item)" class="btn btn-primary">
                 + add
                </a>
            </div>
        </div>
        <!-- end of cart  -->
    </div>
</template>

<script>
export default {
  name: 'App',
  props:['items'],
  methods:{
    addToCart(item){
      this.$emit("newItemAdded",item);
    }
  },

}
</script>

<style scoped>
   .container{
     padding-top:10px;
   }
</style>

