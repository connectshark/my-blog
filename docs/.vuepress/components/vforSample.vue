<template>
  <ul class="vforSample">
    <li v-for="(item, index) in nav" :key="index"
    class="item"
    :class="{active : index === activeIndex}"
    @click="activeIndex = index">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'vforSample',
  data () {
    return {
      nav: ['新聞', '股市', '拍賣', '購物中心'],
      activeIndex: 1
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
.vforSample{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
}
.item{
  background-color: #ccc;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
}
.active{
  background-color: #fa8;
  color: #fff;
}
</style>
