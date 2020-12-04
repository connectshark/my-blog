<template>
  <div id="search-word">
    <input
      type="text"
      v-model="search"
      class="search"
      maxlength="20"
      placeholder="要搜尋的評論">
    <ul class="comments">
      <li class="comment" v-for="item in matchWord" :key="item.id">
        <!-- <span class="title" v-html="highlight2(item.text)"></span>
        <span class="comment-id" v-html="highlight2(item.id.toString())"></span> -->
        <div class="content" v-html="highlight(item.text,item.id.toString())"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'searchWord',
  data () {
    return {
      search: '',
      comments : [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ]
    }
  },
  methods: {
    highlight (word, id) {
      let regWord = new RegExp(this.search, 'gi')
      let titleWord = word.replace(regWord, `<span class="hl">${this.search}</span>`)
      let idWord = id.replace(regWord, `<span class="hl">${this.search}</span>`)
      return this.search === '' ? `<span class="title">${word}</span><span class="comment-id">${id}</span>` : `<span class="title">${titleWord}</span><span class="comment-id">${idWord}</span>`
    }
    
    // highlight2 (text) {
    //   let regWord = new RegExp(this.search, 'gi')
    //   return text.replace(regWord, `<span class="hl">${this.search}</span>`)
    // }
  },
  computed: {
    matchWord () {
      let regWord = new RegExp(this.search, 'gi')
      return this.comments.filter(item => item.text.match(regWord) || item.id.toString().match(regWord))
    },
  },
}
</script>

<style lang="scss" scoped>
#search-word{
  min-height: 220px;
}
.search{
  display: block;
  width: 50%;
  margin: auto;
  padding: 5px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  line-height: 1.5;
  transition: padding .3s;
  box-sizing: border-box;
  text-align: center;
  &:focus{
    padding: 20px;
  }
}
*{
  list-style: none;
}
.comments{
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 0;
  .comment{
    .content{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }
    background-color: #fff;
    transition: background .3s;
    text-transform: capitalize;
    &:hover{
      background-color: #ccc;
    }
  }
}
  
</style>