<template>
    <div>
        <span v-tip="greet">测试hover效果</span>
        <div class="hyxd_body">
            <div v-img="item" class="test" v-for="(item, index) in list">
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import index from './index';
export default{
    data(){
        return{
            greet: 'hello, world',
            list: [
                'http://img.infinitynewtab.com/wallpaper/2021.jpg',
                'http://img.infinitynewtab.com/wallpaper/1234.jpg',
                'http://img.infinitynewtab.com/wallpaper/2345.jpg',
                'http://img.infinitynewtab.com/wallpaper/123.jpg',
                'http://img.infinitynewtab.com/wallpaper/222.jpg',
            ]
        }
    },
    mounted(){
        this.$nextTick(function(){
        })
    },
    methods: {

    },
    components: {
        index
    },
}
</script>

<style type="text/css">
    .test{
        height: 400px;
        background-size: contain;
    }
</style>