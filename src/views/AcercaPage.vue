<template>
  <v-img
    src="@/assets/logo.png"
    class="my-3"
    contain
    height="150"
  ></v-img>

  <h1 class="display-2 font-weight-bold ">
    GIT<span class="font-weight-light">ANA</span>
  </h1>
  <p class="mb-5 title font-weight-light">Analíticas de Github</p>
  <p class="subheading font-weight-regular">
    Creado por Facundo Gallardo
    <br />si estás interesado o tienes dudas puedes
    <a href="mailto:facundoggallardo@gmail.com" target="_blank"
      >enviarme un correo</a
    >
  </p>
  
  <h2 class="headline-1 font-weight-bold mb-3">También Visita</h2>
  <v-layout justify-center>
    <a
      v-for="(link, i) in linksImportantes"
      :key="i"
      :href="link.href"
      class="subheading mx-3"
      target="_blank"
    >
      {{ link.text }}
    </a>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    linksImportantes: [
      {
        text: "Repositorio Github",
        href: "https://github.com/flacket/githubanalytic",
      },
      {
        text: "Mi Perfil Github",
        href: "https://github.com/flacket",
      },
    ],
  }),
};
</script>
