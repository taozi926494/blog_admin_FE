<template>
	<div>
		<v-header class="animated slideInDown"></v-header>
		<div id="mainland" class="clearfloat">
			<v-aside  class="animated slideInLeft"></v-aside>
		</div>
	  	<!-- <div id="app">

		    <router-link to="/index">index</router-link>
		    <router-link to="/second">second</router-link>
		    <router-view></router-view>
		  </div> -->
	</div>
</template>

<script>
	import vHeader from './components/header.vue';
	import vAside from './components/aside.vue';
	export default {
	  name: 'app',
	  components: {
	  	vHeader,
	  	vAside
	  },
	  mounted: function(){
	  	const bodyHeight = document.offsetHeight;
	  	console.log(bodyHeight)
	  	// document.getElementById('mainland').style.height = clientHeight - 60 + "px";
	  }
	}
	var     s   =   " ";

s   +=   "\r\n<br>网页可见区域宽： "+   document.body.clientWidth; 
s   +=   "\r\n<br>网页可见区域高： "+   document.body.clientHeight; 
s   +=   "\r\n<br>网页可见区域宽： "+   document.body.offsetWidth     + "   (包括边线的宽) "; 
s   +=   "\r\n<br>网页可见区域高： "+   document.body.offsetHeight   + "   (包括边线的宽) "; 
s   +=   "\r\n<br>网页正文全文宽： "+   document.body.scrollWidth; 
s   +=   "\r\n<br>网页正文全文高： "+   document.body.scrollHeight; 
s   +=   "\r\n<br>网页被卷去的高： "+   document.body.scrollTop; 
s   +=   "\r\n<br>网页被卷去的左： "+   document.body.scrollLeft; 
s   +=   "\r\n<br>网页正文部分上： "+   window.screenTop; 
s   +=   "\r\n<br>网页正文部分左： "+   window.screenLeft; 
s   +=   "\r\n<br>屏幕分辨率的高： "+   window.screen.height; 
s   +=   "\r\n<br>屏幕分辨率的宽： "+   window.screen.width; 
s   +=   "\r\n<br>屏幕可用工作区高度： "+   window.screen.availHeight+" （去掉状态栏）"; 
s   +=   "\r\n<br>屏幕可用工作区宽度： "+   window.screen.availWidth; 
//alert(s);
document.write(s);
</script>

<style lang="scss">
	@import '~animate.css';
	body, div, ul, li, table, td, a, p, h1, h2, h3, h4, h5{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	li{
		list-style: none;
	}
	.clearfloat{
		zoom: 1; /* IE6/7 */
	}
	.clearfloat :after{
		clear: both; content: '.'; display: block; width: 0; height: 0; visibility: hidden;
	}
	#mainland{
		background-color: #999;
		width: 100%;
		position: relative;
	}
</style>