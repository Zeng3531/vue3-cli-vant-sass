<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>age：{{person.age}}</h2>
    <h2>telete{{title}}</h2>
    <h2>age：{{age}}</h2>
    <button @click="test">触发一下Demo组件中的hello事件</button>
    <button @click='count'>点击加加</button>
    <button @click='changeuser'>点击改变名字</button>
    <button @click='changeperson'>点击改变person的年龄</button>

</template>

<script>
// setup 的执行比创建前还要早 他的this 也是undefined 他只能接受两个参数 
// 分别叫做 
import { reactive, toRefs, ref, watch, handleError, watchEffect } from 'vue'
export default {
    name: 'Demo',
    // 接受Demo传过来的信息
    props: ['mag', 'school'],
    // 触发事件的api
    emits: ['hello'],
    // 创建前
    beforeCreate() {
        console.log('beforeCreate');
    },

    setup(props, context) {
        console.log('setup', props, context)
        console.log(context.slots);

        // 方法子传父
        function test() {
            context.emit('hello', 666)
        }

        const title = ref('hello');
        const userinfo = ref('你好啊')
        const user = reactive({ name: '李四', age: '26' })
        function changeuser() {
            user.name = '李五'
            title.value = 'hello 你好啊'
            userinfo.vlaue = '你好啊 hello'
            console.log('触发了');
        }


        let counts = ref(0)
        function count() {
            counts.value++
        }
        console.log(counts);



        watch(counts, (newVal, oldVal) => {
            console.log('新值', newVal, '旧值', oldVal);
        })

        // 监视多个值得变化
        watch([userinfo, title], (newVal, oldVal) => {
            console.log('新值', newVal, '旧值', oldVal);
        })

        // 深度监视,立即监听
        watch([() => user.name, counts], (newVal, oldVal) => {
            console.log('新值', newVal, '旧值', oldVal);
        }, { immediate: true, deep: true })
        // 数据   
        let person = ref({
            name: '张三',
            age: 18
        })

        function changeperson() {
            console.log('触发了');
            person.age++
        }

        watch(person, (newValue, oldValue) => {
            console.log('person的值变化了', newValue, oldValue);
        }, { immediate: true })

//watch 的使用方法是 既要指明监视的属性 也要指明监视的回调
//watchEffect 相反的 
        watchEffect(() => {
            console.log('watch 触发了');
            const x1 = person.age.value
        })

        return {
            person,
            test,
            title,
            changeuser,
            // 使用toRefs
            ...toRefs(user),
            count,
            watch,
            changeperson
        }
    }
}
</script>

<style lang="scss" scoped>

</style>