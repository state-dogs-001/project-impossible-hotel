<template>
  <div id="HomeComponent">
    <v-parallax
      height="300"
      dark
      transition="slide-x-transition"
      src="https://pix10.agoda.net/hotelImages/176968/-1/4b66733cc05d6d6883ba4498a9815f8f.jpg?s=1024x768"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 subheading mb-4">Welcome</h1>
          <h3 class="font-weight-thin">to Impossible Hotel</h3>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <h1 class="mt-2 mb-4" style="color: gray">Small Rooms</h1>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4">
          <v-card class="mx-auto" max-width="400" outlined shaped>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Share
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
