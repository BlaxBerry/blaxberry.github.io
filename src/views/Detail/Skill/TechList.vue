<template>
  <div id="detail-skill-techlist">
    <v-card justify="center" class="pa-5">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item, index) in list" :key="index">
          <v-expansion-panel-header>
            <v-img
              v-for="(pic, index) in item.pic"
              :key="index"
              :src="require(`@/assets/images/${pic}`)"
              lazy-src="https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif"
              max-width="50"
              class="mx-1"
            ></v-img>
            <h4 class="text-right pr-3">{{ item.name }}</h4>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item v-for="(list, index) in item.desc" :key="index">
              {{ item.desc.length > 1 ? index + 1 + "." : "" }} {{ list }}
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="scss" scoped></style>
