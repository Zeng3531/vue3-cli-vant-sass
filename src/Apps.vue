<template>
    <div class="zuxian">
        <h1>我是祖先组件------{{car.name}}---{{car.price}}</h1>
        <child> </child>
    </div>
</template>

<script setup>
import child from './components/child.vue'
import { reactive, provide } from "vue";

let car = reactive({
    name: '宝马',
    price: 100000
})
provide('car', car)

</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.zuxian {


    width: 100%;
    height: 300px;
    background-color: #ccc;
}
</style>