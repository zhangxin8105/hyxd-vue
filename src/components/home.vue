<template>
    <div>
        <!-- <index/> -->
        <div class="hyxd_body">
            <div class="xui_item">
                <label>your name: </label>
                <div class="xui_content xui_input_search">
                    <input type="text" class="xui_input" v-model="name" placeholder="type here" />
                </div>
            </div>
            <button class="xui_btn xui_btn_default" @click="handleToSearch">search</button>
        </div>
    </div>
</template>

<script type="text/javascript">
import index from './index';
export default{
    data(){
        return{
            name: '',
        }
    },
    mounted(){
        this.$nextTick(function(){
        })
    },
    methods: {
        handleToSearch(){
            // this.$router.push({
            //     path: '/record',
            //     query: {
            //         name: '电竞'
            //     }
            // });
            this.$router.push({
                name: 'record',
                // params: {
                //     key: name
                // },
                onComplete(){
                    console.log('completed');
                },
                onAbort(){
                    console.log(aborted);
                }
            })
        }
    },
    components: {
        index
    },
}
</script>