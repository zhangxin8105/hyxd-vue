<template>
    <div id="app">
        <index/>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import Index from './components/index';

import './assets/css/index.css';
import './assets/css/hyxd.css';

import index from './assets/js/index';

export default {
    name: 'App',
    components: {
        Index
    }
}
</script>

<style type="text/css">
.fade-enter {
    opacity:0;
}
.fade-leave{
    opacity:1;
}
.fade-enter-active{
    transition:opacity .5s;
}
.fade-leave-active{
    opacity:0;
    transition:opacity .5s;
}
</style>