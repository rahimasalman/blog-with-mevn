/* eslint-disable */
<template>
  <div class="container mt-5">
    <form @submit.prevent="submitForm">
      <div class="field column is-centered">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model="post.title"
            class="input"
            type="text"
            placeholder="Title"
          />
        </div>
      </div>

      <div class="field column is-centered">
        <label class="label">Content</label>
        <div class="control">
          <textarea
            v-model="post.content"
            class="textarea"
            placeholder="Content here"
          ></textarea>
        </div>
      </div>

      <div class="field column is-centered">
        <label class="label">Creator</label>
        <div class="control">
          <input
            v-model="post.creator"
            class="input"
            type="text"
            placeholder="Creator"
          />
        </div>
      </div>

      <div class="field column is-centered">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="post.email"
            class="input"
            type="email"
            placeholder="Email"
          />
          <span class="icon is-small is-left">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </span>
          <span class="icon is-small is-right"> </span>
        </div>
      </div>

      <div class="field column is-centered is-grouped">
        <div class="control">
          <button type="submit" class="button is-success">Submit</button>
        </div>
        <div class="control">
          <router-link to="/" class="button is-outline is-light"
            >Cancel</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["post", "submitForm"],
};
</script>

<style></style>
