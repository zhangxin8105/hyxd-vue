<template>
    <div>
        <!-- <index/> -->
        <div class="hyxd_body">
            <div @click="handleBack">back</div>
            <div @click="handleHome">home</div>
        </div>
    </div>
</template>

<script type="text/javascript">
import index from './index';

export default{
    data(){
        return{}
    },
    mounted(){
        this.$nextTick(function(){
        })
    },
    watch: {
        '$route' (to, from){
            console.log(to);
            console.log(from);
        }
    },
    methods: {
        handleBack(){
            this.$router.go(-1);
        },
        handleHome(){
            this.$router.replace(
                '/weekly', 
                );
        }
    },
    components: {
        index
    },
}
</script>