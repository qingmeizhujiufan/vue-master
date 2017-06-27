<template>
	<div class="mint-search">
		<div class="mint-searchbar">
			<div class="mint-searchbar-inner">
				<i class="mintui mintui-search"></i>
				<input ref="input" @click="visible = true" type="search" v-model="currentValue" :placeholder="placeholder" class="mint-searchbar-core">
			</div>
			<a class="mint-searchbar-cancel" @click="visible = false, currentValue = ''" v-show="visible" v-text="cancelText">
			</a>
		</div>
		<div class="mint-search-list" v-show="visible">
			<div class="mint-search-list-warp">
				<slot>
					<x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
				</slot>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import XCell from 'mint-ui/packages/cell/index.js';

	export default {
		name: 'mt-search',
		data() {
			return {
				visible: false,
				currentValue: this.value
			};
		},

		components: {
			XCell
		},

		watch: {
			currentValue(val) {
				this.$emit('input', val);
			},
			value(val) {
				this.currentValue = val;
			},
			visible() {
				this.$emit('update:visible', this.visible);
			}
		},

		props: {
			value: String,
			autofocus: Boolean,
			show: Boolean,
			cancelText: {
				default: '取消'
			},
			placeholder: {
				default: '搜索'
			},
			result: Array
		},

		mounted() {
			this.autofocus && this.$refs.input.focus();
		}
	};
</script>