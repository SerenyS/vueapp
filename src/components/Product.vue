<template>
  <v-app>
   <v-container class="my-5">
     <!-- ask teacher how to add product images -->
      <!-- src="https://images.unsplash.com/photo-1617176892739-98fc49fdcbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80" -->
          <v-card-header-text>  
             <v-img
                height="250"
                width="250"
                :src = "product.image"
             ></v-img>
      <v-card-title><h5 class="text-center card-title">{{product.title}}</h5></v-card-title>
      <v-card-subtitle> <p class="text-center text-muted card-text display-4">${{Number(product.price).toFixed()}}</p></v-card-subtitle>
      <v-btn :disabled="isInCart" @click="$emit('add-to-cart',product)" class="btn btn-info form-control">{{isInCart ? 'Added to cart': 'Add to Cart'}}
      </v-btn>
   
    </v-card-header-text>
    </v-container>
  </v-app>
</template>

<script>
export default{
    props: ['product','isInCart']
}
</script>