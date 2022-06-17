<template>
  <post-form :post="post" :submitForm="updatePost"> </post-form>
</template>
<script>
import PostForm from "../components/PostForm.vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
export default {
  components: {
    PostForm,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const API_URL = "http://localhost:5000/posts";

    const post = ref({
      title: "",
      content: "",
      creator: "",
      email: "",
    });
    onMounted(() => {
      getPost();
    });
    async function getPost() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      post.value = json;
    }

    async function updatePost() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: post.value.title,
          content: post.value.content,
          creator: post.value.creator,
          email: post.value.email,
        }),
      });
      // eslint-disable-next-line no-unused-vars
      const json = await response.json();
      router.push({
        name: "home",
      });
    }

    return {
      post,
      updatePost,
    };
  },
};
</script>
<style></style>
