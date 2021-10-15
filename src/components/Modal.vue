<template>
     <v-app id="inspire">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="#efeae5"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Description
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            Description
          </v-card-title>
          <v-card-text> {{product.description}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="black"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script> 
 export default {
   name:"modal",
   props:{product:Object},
   data() {
    return {
      dialog: false,
    }
 },
  
  
  };
</script>
