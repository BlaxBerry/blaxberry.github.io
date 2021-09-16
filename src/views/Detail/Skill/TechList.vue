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
            />
            <h2 class="pl-5">{{ item.name }}</h2>
          </v-expansion-panel-header>

          <!-- dropdown list -->
          <v-expansion-panel-content>
            <v-list-item class="d-block pa-2 px-4 pa-lg-5">
              <p
                v-for="(list, index) in item.desc"
                :key="index"
                class="text-caption text-sm-body-2 text-md-body-1 ma-0 mb-2 mb-md-5"
              >
                <b class="mr-1">
                  {{ item.desc.length > 1 ? index + 1 + ". " : "" }}
                </b>
                {{ list }}
              </p>
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
