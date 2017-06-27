<template>
	<div class="page">
		<mt-header fixed title="设备进场">
			<router-link to="deviceHome" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="page-content" style="margin-top: 40px;padding-top: 0;">
			<Search></Search>
			<div>
				<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell hair-line-bottom" v-for="item in data">
							<a>
								<div class="mui-table-view-cell-title">
									<span v-text="item.devName"></span>
									<span v-text="item.devModel" style="margin-left: 5px;font-size: 15px;color: #666;"></span>
								</div>
								<p class="mui-table-view-cell-content">
									<span v-text="item.supplierName"></span>
								</p>
								<span class="mui-table-view-cell-top" v-text="item.billState"></span>
								<span class="mui-table-view-cell-date">
							<span v-text="item.enterDate"></span>
								<span> 进场</span>
								</span>
							</a>
						</li>
					</ul>
					<div slot="top" class="mint-loadmore-top">
						<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
						<span v-show="topStatus === 'loading'">Loading...</span>
					</div>
				</mt-loadmore>
			</div>
		</div>
	</div>
</template>

<script>
	import Search from '@/components/Search';
	import { Loadmore } from 'mint-ui';

	export default {
		name: 'mt-search',
		data() {
			return {
				data: []
			}
		},
		beforeMount: function() {
			this.getCustomers()
		},
		methods: {
			getCustomers: function() {
				var param = {
					pageNumber: 0,
					pageSize: 10,
					conditionValue: '',
					companyId: '8aaa004d5c67c532015c86cd30b600cb',
					companyName: '东方银座项目部（集成测试勿动）'
				};
				this.$http.get('http://test.cscec3b.com.cn/icop-devcont-web/spot/enternotice/list', {
						params: param
					})
					.then((response) => {
						var res = response.body;
						console.log('data=== ', res);
						if(res.success) {
							this.data = res.backData.content;
							console.log('data11111111111===', this);
						} else {

						}
					})
					.catch(function(response) {
						console.log(response)
					})
			}
		}
	};
</script>