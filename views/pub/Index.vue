<template>
	<div class="page">
		<mt-header fixed title="中建三局"></mt-header>
		<div class="page-content" style="margin-top: 40px;">
			<div class="slider">
				<mt-swipe :auto="3000">
					<mt-swipe-item><img src="../../src/assets/banner-word.png" /></mt-swipe-item>
					<mt-swipe-item><img src="../../src/assets/banner-word-provider.png" /></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="div-col div-col-4">
				<router-link to="deviceHome">
					<img src="../../src/assets/chartHome.png" alt="">
					<div>设备项目组</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="deviceProviderHome">
					<img src="../../src/assets/chartHome.png" alt="">
					<div>设备供应商</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/chartHome.png" alt="">
					<div>奖罚</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Swipe, SwipeItem } from 'mint-ui';
	import chartHome from '@/assets/chartHome.png';
	export default {
		name: 'index',
		data() {
			return {}
		}
	}
</script>
<style type="text/css">
	.slider {
		width: 100vw;
		height: 32.8vw;
		margin-bottom: 1vh;
	}
	
	.slider .mint-swipe-item {
		width: 100%;
		height: 100%;
		background-image: url('../../src/assets/banner-bg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	.slider .mint-swipe-item img {
		width: 35vw;
		margin-top: 5vh;
		margin-left: 10vw;
	}
	
	.div-col {
		position: relative;
		float: left;
		margin: 0;
		vertical-align: top;
		background-color: #fff;
		text-align: center;
	}
	
	.div-col-4 {
		width: 33.33333333vw;
		height: 33.3333333vw;
	}
	
	.div-col a {
		display: table-cell;
		width: 33.3333333vw;
		height: 33.3333333vw;
		vertical-align: middle;
		text-decoration: none;
		;
	}
	
	.div-col img {
		display: inline-block;
		width: 100;
		height: 12vw;
		margin-bottom: 10px;
	}
	
	.div-col div {
		font-size: 15px;
		line-height: 15px;
		display: block;
		width: 100%;
		height: 15px;
		text-overflow: ellipsis;
		color: #333;
	}
</style>