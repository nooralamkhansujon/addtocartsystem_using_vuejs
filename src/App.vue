<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Super Store</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2"
                type="search"  placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          </div>
      </nav>

      <!-- start of row  -->
      <div class="container mt-3">
          <div class="row">
              <div class="col-sm-9">

              <div class="row">
                 <!-- start of cart  -->
                <div class="card col-md-4" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <!-- end of cart  -->

                <!-- start of cart  -->
                <div class="card col-md-4" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <!-- end of cart  -->

                <!-- start of cart  -->
                <div class="card col-md-4" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <!-- end of cart  -->
              </div>

              </div>
              <div class="col-sm-3">
                    <ul class="list-group">
                       <li class="list-group-item">
                           Item - Price
                       </li>
                       <li class="list-group-item">
                           Item - Price
                       </li>
                       <li class="list-group-item">
                           Item - Price
                       </li>
                    </ul>
              </div>
          </div>
      </div>
      <!-- end of row  -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
   .container{
     padding-top:10px;
   }
</style>
