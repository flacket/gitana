<template>
  <v-img src="@/assets/logo.png" class="my-3" contain height="200"></v-img>

  <h1 class="display-2 font-weight-bold">
    GIT<span class="font-weight-light">ANA</span>
  </h1>
  <h2 class="mb-3">
    <span class="font-weight-light">Analíticas de Github</span>
  </h2>
  <p class="subheading font-weight-regular">
    Webapp en desarrollo para analisis de sentimientos en equipos de
    trabajo distribuidos
  </p>
  <p class="subheading font-weight-regular">
    Inicia Sesion en Github para comenzar
  </p>
  <GithubLogin />
</template>

<script>
import GithubLogin from "@/components/GithubLogin.vue";

export default {
  components: {
    GithubLogin,
  },
};
</script>
