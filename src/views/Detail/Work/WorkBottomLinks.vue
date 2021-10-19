<template>
  <div class="text-center mt-10 py-10 px-5">
    <b>Github・作品集をご確認ください</b>
    <v-sheet color="pa-4">
      <!-- 1. -->
      <v-btn
        href="https://github.com/BlaxBerry?tab=repositories"
        target="_blank"
        class="py-6 mr-1 black darken-2 white--text font-weight-black"
      >
        <v-icon size="2rem" v-text="'mdi-github'" class="mr-1" />
        Github
      </v-btn>
      <!-- 2. -->
      <v-btn
        to="/works"
        class="py-6 cyan darken-2 white--text font-weight-black"
      >
        More Works
      </v-btn>
    </v-sheet>
  </div>
</template>

<script>
export default {};
</script>
