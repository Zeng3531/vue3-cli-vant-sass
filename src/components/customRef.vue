<template>
    <div>
        <input type="text" v-model="keyWord">
        <h1>{{keyWord}}</h1>
    </div>
</template>

<script setup>
import { ref, customRef } from 'vue'

// let keyWord = ref('hello') vue3 中的ref

// 现在使用自定义的ref
function myRef(value) {
    let timer
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newvaule) {
                clearTimeout(timer)
                console.log('新的值', newvaule)
                timer = setTimeout(() => {
                    value = newvaule
                    trigger() //通知vue去解析模板
                }, 1000);
            }
        }
    })

}
let keyWord = myRef('hello')




</script>

<style lang="scss" scoped>

</style>