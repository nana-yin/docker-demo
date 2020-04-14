<template>
  <div class="hello">
    <testSon></testSon>
    <testSon2></testSon2>
    <div>
      <!-- <button @click="changeStateAsync3">点击触发action</button> -->
      <button @click="changeStateAsync3(send)">点击触发action</button>
      <p>{{$store.state.myData}}</p>
      <p>{{$store.getters.getGetters}}</p>
      <p>{{getGetters}}</p>
    </div>
    <button @click="trigger">点击进入列表——懒加载</button>
    <button @click="trigger2">点击进入列表——滚动加载</button>
  </div>
</template>

<script>
import testSon from '@/views/testSon'
import testSon2 from '@/views/testSon2'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'index',
  components: {
    testSon,
    testSon2
  },
  data () {
    return {
      send: '122222222222222',
      receiveData: ''
    }
  },
  computed: {
    ...mapState(['myData']),
    ...mapGetters(['getGetters'])
  },
  methods: {
    ...mapActions(['changeStateAsync3']),
    receive (data) {
      this.receiveData = data
    },
    getMutation () {
      // 触发mutations的方式一,changeState是定义在mutations中的函数名称,this.send是传的参数
      this.$store.commit('changeState', this.send)
    },
    trigger () { // 点击进入列表页
      this.$router.push({ path: '/list' })
    },
    trigger2 () {
      this.$router.push({ path: '/scroll' })
    }
  }
}
</script>
