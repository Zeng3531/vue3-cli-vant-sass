<template>
    <div>
        <div v-if="isshow">
            <button @click="isshow=false">点我销毁</button>
            <h1>{{count}}</h1><button @click="changeup">增加++</button>
            <h1> 点击屏幕获取到坐标:X{{dot.x}}--Y{{dot.y}}</h1>
            <hr>
        </div>
        <h1>{{name}}</h1>
        <h1>{{age}}</h1>
        <h1>{{job.j1.length}}</h1>

        <h4>{{person}}</h4>
        <h4 v-show="person.car">座驾信息:{{person.car}}</h4>
        <button @click="name+='!'">改变名字</button>
        <button @click="age++">改变年龄</button>
        <button @click="job.j1.length++">改变身高</button>
        <button @click="showRewPerson">恢复出场设置</button>
        <button @click="addcar">点击添加一台车</button>
        <button @click="person.car.name+='!'">更改车名</button>
        <button @click="person.car.price++">更改车的颜色</button>
    </div>
</template>

<script>
import usedots from "../hooks/usedots.js";
import {
    ref,
    toRef,
    reactive,
    toRefs,
    readonly,
    shallowReadonly,
    toRaw,
    markRaw 
}
    from 'vue'
export default {
    setup() {
        let isshow = ref(true)

        const count = ref(0)
        function changeup() {
            count.value++
        }

        let dot = usedots()

        let person = reactive({
            name: "张三",
            age: 18,
            job: {
                j1: {
                    length: 170
                }
            }
        })



        function showRewPerson() {
            console.log(person);
            const p = toRefs(person)
            console.log(p);
        }

        function addcar() {
            let car = { name: "宝马", price: 1000 }
            person.car = markRaw(car) 
            // marRaw 让数据永远不发生改变 就当最原始的数据在使用
        } 

        // readonly 只读属性 可以到保护数据的作用 有个覆盖的动作
        // shallowReadonly 浅的只读属性 只考虑第一层的数据 可以到保护数据的作用 有个覆盖的动作
        return {
            count,
            showRewPerson,
            changeup,
            isshow,
            dot,
            person,
            addcar,
            markRaw,
            ...toRefs(person),
            // name: toRef(person, 'name'),
            // age: toRef(person, 'age'),
            // length: toRef(person.job.j1, 'length',)
        }


    }

}
</script>

<style lang="scss" scoped>

</style>