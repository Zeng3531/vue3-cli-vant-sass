import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
    // 实现鼠标打点数据
    const dot = reactive({
        x: 0,
        y: 0
    })

    function dots(event) {
        let X = event.pageX
        let Y = event.pageY
        dot.x = X
        dot.y = Y
        console.log('这个是x轴', X, '这个是y轴', Y);
    }

    // 在挂载前就获取坐标的位置
    onMounted(() => {
        window.addEventListener('click', (dots))
        console.log('onMounted');
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', (dots))
        console.log('onBeforeUnmount');
    })
    return dot
}
