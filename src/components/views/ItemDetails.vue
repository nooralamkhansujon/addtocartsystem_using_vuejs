<template>
 <div v-if="item" class="row">
    <div  class="col-sm-6">
        <img :src="item.photo"  alt="photo">
    </div>
    <div class="col-md-6">
       <h4>{{item.title}}</h4>
       <p>{{item.descr}}</p>
       <p>{{item.price}}</p>
        <p>{{item.description}}</p>
    </div>
 </div>
</template>

<script>
import data from '../../data.js';
export default {
   data(){
     return {
        item:null
     }
   },
   methods:{

   },
   mounted(){
    // console.log(data);
    this.item = data.find(element=>{
        if(element.id == this.$route.params.id){
          return element;
        }
    });
    console.log(this.item);
  }
}
</script>
