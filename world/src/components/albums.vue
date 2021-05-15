<template>
  <div>
  <div v-for="alboms in alboms"
      :key="alboms.id">
      {{alboms.title}} <br>
      <img v-bind:src=alboms.thumbnailUrl>
  </div>
  </div>
</template>
<script>
export default {data() {
    return {
        alboms: [],
      dialog: false,
    };
  },
  methods: {
  async getAlbums() {
      this.alboms = await this.axios.get(
        "https://jsonplaceholder.typicode.com/photos?albumId=" +
          this.$route.params.id
      );
      this.alboms = this.alboms.data;
    },
  },
  mounted() {
    this.getAlbums()
  },
  };
</script>

<style scoped>
</style>