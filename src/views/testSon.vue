<template>
  <div class="hello">
    <h1>Son</h1>
    <button @click="myGift">给兄弟2传值</button>
  </div>
</template>

<script>
import myBus from '@/components/utils/mybus.js'

export default {
  data () {
    return {
      haha: '哈哈'
    }
  },
  methods: {
    myGift () {
      myBus.$emit('msg', this.haha)
    }
  }
}
</script>
