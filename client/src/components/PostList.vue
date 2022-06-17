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
        <button
          @click="removePost(post._id)"
          class="ml-2 button has-background-danger has-text-white"
        >
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
    async function removePost(_id) {
      //eslint-disable-next-line no-unused-vars
      const response = await fetch(`${API_URL}/${_id}`, {
        method: "DELETE",
      });
      getPosts();
    }
    return {
      posts,
      removePost,
    };
  },
};
</script>

<style></style>
