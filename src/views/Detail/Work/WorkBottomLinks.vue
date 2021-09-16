<template>
  <div class="text-center mt-10 py-10 px-5">
    <b>Github・作品集をご確認ください</b>
    <v-btn
      block
      href="https://github.com/BlaxBerry?tab=repositories"
      target="_blank"
      class="py-6 my-2 black darken-2 white--text font-weight-black"
    >
      <v-icon size="2rem" v-text="'mdi-github'" class="mr-1" />
      Github
    </v-btn>

    <v-btn
      block
      to="/works"
      class="py-6 my-2 cyan darken-2 white--text font-weight-black"
    >
      More Works
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>
