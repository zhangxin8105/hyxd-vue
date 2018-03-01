<template>
    <div id="app">
        <index/>
        <router-view/>
    </div>
</template>

<script>
import Index from './components/index';

import './assets/css/index.css';
import index from './assets/js/index';

export default {
    name: 'App',
    components: {
        Index
    }
}
</script>