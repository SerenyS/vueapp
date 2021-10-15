
<template>
  <v-app>
   <v-toolbar color="#d8c4c4" >
     <span class="font-weight-light">Find your perfect set</span>
   </v-toolbar>  

   <v-content class="mt-4">
     <v-row >
        <v-col  >
              <v-btn @click="sortBy('price')" >Sort by Price</v-btn>
        </v-col>
     </v-row>

     <v-row>  
       <v-col class="md-5 my-5">
        <cart v-on:pay="pay()" v-on:remove-from-cart="removeFromCart($event)" :items="cart"></cart>
      </v-col>
      <v-col class="md-7">
       <v-row>
         <v-col class="md-6" :key="product.id" v-for="product in products">
            <product
              :isInCart="isInCart(product)"
              v-on:add-to-cart="addToCart(product)"
              :product="product"
            
            ></product> 
     </v-col>
  
    </v-row>
 
      </v-col>
     </v-row>
   </v-content>
  </v-app>
</template>


  <script>
import products from "@/products.json";
import Product from "@/components/Product.vue";
import Cart from "@/components/Cart.vue";


export default {
    name: 'Main',
    components: {
    Product,
    Cart,
  },
  data() {
    return {
      
      products,
      cart: []
    };
  },
  methods: {

    sortBy(prop){
      this.products.sort((a,b) => a[prop]- b[prop])
    },
    
    
    addToCart(product) {
      this.cart.push(product);
    },
    isInCart(product) {
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        return true;
      }
      return false;
    },
    removeFromCart(product) {
      this.cart = this.cart.filter(item => item.id !== product.id);
    },
    pay() {
      this.cart = [];
      alert("Thanks for shopping with us!");
    }

    // 10/15/2021- Version
  }
};
</script>