<template>
  <v-sheet class="px-2 py-1 d-flex align-center grey lighten-2">
    <button
      v-for="color in ['#ed6a5f', '#f5be4b', '#61c354']"
      class="pa-2 mr-1 rounded-circle d-inline-block"
      :style="{ 'background-color': `${color}` }"
      :key="color"
      x-small
      icon
    />
  </v-sheet>
</template>
