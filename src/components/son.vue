<template>
    <div class="zuxian1">
        <h1>我是孙组件---{{car.name}}----{{car.price}}</h1>
    </div>
</template>

<script setup>
import { inject } from 'vue'
const car = inject('car')
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.zuxian1 {
    width: 180px;
    height: 50px;
    background-color: rgb(8, 19, 229);
}
</style>