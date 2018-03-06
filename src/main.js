// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/index.js';

Vue.config.productionTip = false;

Vue.directive('img', {
	bind(el, binding){
	},
	inserted(el, binding){
		let color = Math.floor(Math.random()*9+1).toString().repeat(3);
		el.style.background = `#${color}`;
		el.innerHTML = color;
		let img = new Image();
		img.src = binding.value;
		img.onload = function(){
			el.style.background = `url(${binding.value})`;
		};
	},
	componentUpdated(el, binding){
	},
});

Vue.directive('tip', {
	bind(el, binding){
		console.log(el);
		console.log(binding);
		el.onclick = function(){
			console.log(el.innerHTML);
		};
		el.onmouseover = function(){
			console.log(binding.value);
		}
	},
	inserted(el, binding){

	}
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
