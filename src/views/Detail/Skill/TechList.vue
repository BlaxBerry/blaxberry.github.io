<template>
  <div id="detail-skill-techlist">
    <v-card justify="center" class="mt-3">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item, index) in list" :key="index">
          <v-expansion-panel-header>
            <v-img
              :src="require(`@/assets/images/${item.pic}`)"
              lazy-src="https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif"
              max-width="50"
              class="mx-1"
            ></v-img>
            <h4 class="pl-5">{{ item.name }}</h4>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-list-item v-for="(list, i) in item.desc" :key="i" class="mt-2">
              <small>
                <b>{{ item.desc.length > 1 ? i + 1 + "." : "" }}</b>
                {{ list }}</small
              >
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

  created() {
    console.log(this.list);
  },
};
</script>

<style lang="scss" scoped></style>
