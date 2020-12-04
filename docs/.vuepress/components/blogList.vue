<template>
  <div class="blogList">
    <div v-for="post in posts" class="card">
      <h2 class="card__title">
        <router-link :to="post.link">{{ post.title}}</router-link>
      </h2>
      <!-- <div class="tags">
        <span class="tag" v-for="tag in post.tags">{{tag}}</span>
      </div> -->

      <p>{{ post.description }}</p>
      <router-link :to="post.link" class="read-btn">閱讀文章 >>></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blogList',
    computed: {
      posts () {
        return this.$site.pages
        .filter(x => x.path.startsWith('/Phaser3/') && !x.frontmatter.blog_index)
        .map(item => {
          return {
            link: item.path,
            title: item.title.substr(15),
            description: item.frontmatter.description,
            tags: (item.frontmatter.tags ? [...item.frontmatter.tags] : []),
            index: parseInt(item.title.substr(15, 2))
          }
        }).sort((a, b) => a.index > b.index ? 1 : -1)
      }
    }
  }
</script>

<style scoped lang="scss">
 .card{
   border: 1px solid transparent;
   box-sizing: border-box;
   padding: 20px;
   margin-bottom: 10px;
   border-radius: 10px;
   box-shadow: 1px 1px 3px transparent;
   transition: border .3s, box-shadow .3s;
   &:hover{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 3px #ddd;
   }
   &__title{
     border-bottom: none;
   }
   .read-btn{
     display: block;
     width: 65px;
     margin-left: auto;
     white-space: nowrap;
     overflow: hidden;
     transition: width .3s;
     &:hover{
       width: 100px;
     }
   }
 }
  .tags {
    margin-top: 10px;
  }
  .tag {
    padding: 5px;
    border-radius: 7px;
    font-size: small;
    background: #3eaf7c;
    margin-right: 5px;
    color: white;
    font-weight: 500;
  }
</style>