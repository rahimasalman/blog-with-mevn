<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://localhost:8080/">
        <img
          src="https://miro.medium.com/max/800/1*Pk2mZo1cBqfVqQi-mtAkuA.png"
          width="40"
          height="60"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': showNav }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="showNav = !showNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': showNav }"
    >
      <div class="navbar-start">
        <strong class="navbar-item has-text-black"> Vue.js CRUD API </strong>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/create" class="button is-success">
              <strong>+ Create</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: function () {
    return {
      showNav: false,
    };
  },
};
</script>
<style lang="scss"></style>
