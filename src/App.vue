
<template>
  {{name}}
  <br>
  {{num}}
  <br>
  {{obj.type}}
  <br>
  {{obj.salary}}
  <br>
  {{obj.c}}
  <br>
  爱好:{{hoppy}}
  <br>

  <button @click="hello">点击增加数量</button>
  <button @click="sayhello">点击弹窗</button>
  <button @click="changeinfo">改变数值</button>
  <button @click="addhoppy">增加爱好</button>
  <button @click="removehoppy">删除爱好</button>
  <button @click="changehoppy">改变爱好</button>


  <Demo mag="小白" school="明德" @hello="showHelloMsg" v-if="isShowDemo">
    <h1>你好啊</h1>
  </Demo>

  <Watch></Watch>
  <customRef></customRef>
</template>


<script setup>
// vue2的数据个vue3 的数据不要混用 vue2 能读取vue3的数据 但是vue3 不能读取到vue3的数据 不建议使用这个
import { remove } from '@vue/shared';
import { ref, reactive } from 'vue'
import Demo from './components/Demo.vue'
import Watch from './components/watch.vue'
import customRef from './components/customRef.vue'
let name = ref('萧尔槟')
let num = ref(0)


// 对象
// let obj = ref({
//   type: '前端工程师',
//   salary: '30k'
// })
// console.log(obj);
// RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: {…}, _value: Proxy

let obj = reactive({
  type: '前端工程师',
  salary: '30k',
  a: {
    b: {
      c: 666
    }
  }
})
console.log(obj);
// Proxy {type: '前端工程师', salary: '30k'}

// 数组的方式
// let hoppy = ['1', '2', '3', '4']
let hoppy = reactive(['吸烟', '烫头', '喝酒'])

function showHelloMsg(value) {
  alert(`触发了这个函数${value}`)
}

// 在vue 3 中不用使用this 以为他都是写在setup方法里面
function hello() {
  // 使用ref引用对象 加工完的数据本质是一个对象 可以使用.value 的方式拿到他的值 底层是通过reflmpl {get set value}
  num.value++
}

function changeinfo() {
  num.value = 100
  // obj.value.type = 'UI工程师'
  // obj.value.salary = '50k'
  obj.type = 'UI工程师'
  obj.salary = '50k',
    obj.c = '可以找的到'
}


function sayhello() {
  alert(`名字:${name.value},年龄:${num.value}`)
}

// 增加爱好
function addhoppy() {

}

// 删除 一个爱好
function removehoppy() {

}




</script>
<style scoped>

</style>
