<template>
  <div class="container">
    <div v-for="post in posts" :key="post._id" class="card my-5">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-3">{{ post.title }}</p>
          </div>
        </div>

        <div class="content is-3">
          {{ post.content }}
          <p></p>
          <strong>Creator: {{ post.creator }}</strong>
          <p>{{ post.email }}</p>
        </div>
      </div>
      <footer class="buttons ml-5">
        <button class="button is-link has-text-white">Edit</button>
        <button class="button has-background-danger has-text-white">
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const posts = ref([]);
    const API_URL = "http://localhost:5000/posts";
    onMounted(() => {
      getPosts();
    });
    async function getPosts() {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        posts.value = json;
      } catch (error) {
        console.log(error);
      }
    }
    return {
      posts,
    };
  },
};
</script>

<style></style>
