<!-- <template>
    <div>
        姓: <input type="text">{{person.name}}<input />
        <br>
        名: <input type="text">{{person.username}}<input />

        全名: <span>{{person.fullName}}</span>
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
export default {
    setup() {
        let person = (reactive)({
            name: '李白',
            username: '逍遥'
        })

        // 计算属性
        person.fullName = computed(() => {
            return person.name + person.username
        })
        return {
            ...toRefs(state),
            person
        }

    },
}
</script>

<style lang="scss" scoped>

</style> -->