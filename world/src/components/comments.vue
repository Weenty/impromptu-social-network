<template>
  <div>
    <b>Пост № {{ this.items.id }} </b> <br />
    <hr />
    BODY: {{ this.items.body }} <br />
    TITLE: {{ this.items.title }} <br />
    <router-link :to="'/users/' + this.items.userId"
      ><b><button class="buttion1">Перейти на страницу пользователя</button></b>
    </router-link>
    <hr />
    <br />
    <b> Комментарии </b> <br />
    <hr />
    <br />
    <div v-for="comments in comments" :key="comments.id">
      <br />
      <div class="com">{{ comments.name }}</div>
      <b class="email"> {{ comments.email }} </b> <br />
      <i>{{ comments.body }}</i> <br />
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
      comments: [],
      dialog: false,
    };
  },
  methods: {
    async getPosts() {
      this.items = await this.axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id
      );
      this.items = this.items.data;
    },
    async getComments() {
      this.comments = await this.axios.get(
        "https://jsonplaceholder.typicode.com/comments?postId=" +
          this.$route.params.id
      );
      this.comments = this.comments.data;
    },
  },
  mounted() {
    this.getPosts(), this.getComments();
  },
};
</script>

<style scoped>
.buttion1 {
  color: black;
  text-decoration: none;
}
.email {
  margin-left: 60px;
}
.com {
  font-size: 17px;
}
</style>