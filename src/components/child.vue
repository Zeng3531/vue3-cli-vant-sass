<template>
    <div class="zuxian2">
        <h1>我是子组件--{{car.name}}----{{car.price}}</h1>
        <son></son>
    </div>
</template>

<script setup>
import son from './son.vue'
import { inject } from 'vue'
const car = inject('car')
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.zuxian2 {

    width: 60%;
    height: 180px;
    background-color: rgb(219, 11, 202);
}
</style>