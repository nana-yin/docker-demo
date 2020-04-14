<template>
  <div class="hello">
    <h1>Son2</h1>
    <p>{{haha}}</p>
  </div>
</template>

<script>
import myBus from '@/components/utils/mybus.js'

export default {
  data () {
    return {
      haha: ''
    }
  },
  mounted () {
    myBus.$on('msg', res => {
      this.haha = res
    })
  }
}
</script>
