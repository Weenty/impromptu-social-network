<template>
  <div>
    Имя пользователя {{ items.username }}
    <hr />
    Имя: {{ items.name }} <br />
    email: {{ items.email }} <br />
    <hr />
    Адрес: <br />
    Улица: {{ items.address.street }} <br />
    После: {{ items.address.suite }} <br />
    Город: {{ items.address.city }} <br />
    Индекс: {{ items.address.zipcode }} <br />
    <hr />
    Геолокация: <br />
    Ширина: {{ items.address.geo.lat }} <br />
    Долгота: {{ items.address.geo.lng }} <br />
    <hr />
    Телефон: {{ items.phone }} <br />
    Веб-сайт: {{ items.website }} <br />
    <hr />
    Компания: <br />
    Название: {{ items.company.name }} <br />
    Слоган: {{ items.company.catchPhrase }} <br />
    bs: {{ items.company.bs }} <br />
    <hr />
    <div><b> Альбомы пользователя </b></div>
    <br />
    <router-link
      v-for="alboms in alboms"
      :to="'/users/' + alboms.userId + '/albums/' + alboms.id"
      :key="alboms.id"
    >
      {{ alboms.title }}
      <hr />
      <br />
    </router-link>
    <br />
    <hr />
    <hr />
    <b> Посты пользователя </b> <br />
    <div v-for="itt in itt" :key="itt.id">
      <div class="text1">
        <br />BODY: {{ itt.body }} <br />
        TITLE: {{ itt.title }} <br>
      </div>
      <br />
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      itt: [],
      alboms: [],
      dialog: false,
    };
  },
  methods: {
    async getUser() {
      this.items = await this.axios.get(
        "https://jsonplaceholder.typicode.com/users/" + this.$route.params.id
      );
      this.items = this.items.data;
    },
    async getPosts() {
      this.itt = await this.axios.get(
        "https://jsonplaceholder.typicode.com/posts?userId=" +
          this.$route.params.id
      );
      this.itt = this.itt.data;
    },
    async getAlbums() {
      this.alboms = await this.axios.get(
        "https://jsonplaceholder.typicode.com/albums?userId=" +
          this.$route.params.id
      );
      this.alboms = this.alboms.data;
    },
  },
  mounted() {
    this.getUser(), this.getPosts(), this.getAlbums();
  },
};
</script>
<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>