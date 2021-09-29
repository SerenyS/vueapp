<template>
  <v-app>
    <v-card >
       <v-list-item singleProduct v-for="item in items" :key="item.id">
        <v-list-item-content>

          <v-list-item-title>{{ item.title }} - $ {{ item.price }}</v-list-item-title>
           <v-btn  class="btn badge badge-warning float-right" color="red" plain @click="$emit('remove-from-cart',item)"> Remove </v-btn>

        </v-list-item-content>
      </v-list-item>
        <v-container >
            <h4 class="text-center">${{total}}</h4>
        </v-container>
    <v-btn  :disabled="items.length === 0" @click="$emit('pay')" class="btn btn-info form-control"> Pay Now! </v-btn>
    </v-card>
  </v-app>
</template>

<script>
export default {
  props: ["items"],
  computed: {
    total() {
      return this.items.reduce((acc, item) => acc + Number(item.price), 0);
    }
  }
};
</script>