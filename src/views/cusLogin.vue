<template>
  <div style="text-align: center">
    <v-btn class="mt-10" @click="submit">Submit</v-btn>
    <br />
    {{ email }}
    <br />
    {{ password }}
  </div>
</template>

<script>
import { db } from "@/plugins/firebaseConfig.js";
export default {
  data: () => ({
    email: [],
    password: []
  }),
  methods: {
    submit() {
      db.collection("users")
        .get()
        .then(user => {
          user.docs.forEach(doc => {
            this.email.push(doc.data().cusEmail);
            this.password.push(doc.data().cusPassword);
          });
        });
    }
  }
};
</script>

<style></style>
