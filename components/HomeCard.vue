<template>
    <div class="container">
        <div class="content-container">
            <h2>{{ title }}</h2>
            <p>{{ body }}</p>
        </div>

        <div class="img-container">
            <img :src="src"  alt="Imagen">
        </div>
    </div>
</template>

<style scoped src='@/assets/styles/homeCard.css'></style>

<script>
export default {
  name: 'HomeCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
