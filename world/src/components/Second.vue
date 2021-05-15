<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <br />BODY: {{ item.body }} <br />
      TITLE: {{ item.title }} <br />
      <br />
      <router-link :to="'/users/' + item.userId"
        ><b><button>Перейти на страницу пользователя</button></b>
      </router-link> <router-link :to="'/posts/comments/' + item.id"
        ><b><button class="b1">Комментарии</button></b>
      </router-link>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      dialog: false,
    };
  },
  methods: {
    async getPosts() {
      this.items = await this.axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      this.items = this.items.data;
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.b1 {
  margin-left: 25px;
}
</style>