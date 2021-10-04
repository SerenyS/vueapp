<template>
  <v-app>
   <v-container class="my-5">
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
      <br>

      <v-btn @click="$emit('showModal')" >Description</v-btn>
   
    </v-card-header-text>
    </v-container>
  </v-app>
</template>

<script>

export default{
    props: ['product','isInCart']
}
</script>