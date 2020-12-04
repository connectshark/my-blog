<template>
  <div class="last-article">
    <h2>最新文章</h2>
    <router-link :to="lastPost.path">{{lastPost.title}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'lastArticle',
  computed: {
    lastPost () {
      return this.$site.pages.find(article => article.key === 'v-e3654bc2')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>