<template>
    <div>
        <div class="hyxd_body">
            查询你的荒野行动战绩
        </div>
    </div>
</template>

<script type="text/javascript">
import index from './index';
export default{
    data(){
        return{
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

<style type="text/css">

</style>