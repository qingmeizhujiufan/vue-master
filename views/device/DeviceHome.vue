<template>
	<div class="page">
		<mt-header fixed title="设备现场">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="page-content" style="margin-top: 40px;">
			<div class="slider">
				<mt-swipe :auto="3000">
					<mt-swipe-item><img src="../../src/assets/banner-word.png" /></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="div-col div-col-4">
				<router-link to="deviceApproachNotice">
					<img src="../../src/assets/jinchang.png" alt="">
					<div>进场通知</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/qiting.png" alt="">
					<div>设备启停租</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/deviceAccept.png" alt="">
					<div>设备进场验收</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/keywork.png" alt="">
					<div>关键作业</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/weibao.png" alt="">
					<div>设备维保</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/deviceRun.png" alt="">
					<div>设备运转</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/deviceCheck.png" alt="">
					<div>设备检查</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/deviceViolation.png" alt="">
					<div>违章罚款</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/deviceRecord.png" alt="">
					<div>单机档案</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/tuichang.png" alt="">
					<div>退场通知单</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/deviceDraft.png" alt="">
					<div>草稿箱</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/contractLedgerList.png" alt="">
					<div>合同台账</div>
				</router-link>
			</div>
			<div class="div-col div-col-4">
				<router-link to="search">
					<img src="../../src/assets/deviceMore.png" alt="">
					<div>敬请期待</div>
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
		name: 'deviceHome',
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