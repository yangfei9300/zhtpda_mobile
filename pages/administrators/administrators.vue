<template>
	<view>
		<view class="colonn center_center">
			<view class="h-50"></view>
			<input placeholder="请输入密码" placeholder-class="text_align1_r fs-30"
			 class="text_align1_r fs-30"
			 v-model="inputValue" />
			<view class="h-50"></view>
			<block v-if="inputValue=='ttec902'">
				<view class="xiayibubtn">扫码记录</view>
				<view class="xiayibubtn">离线数据上传</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue:""
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url(administrators.css);
</style>
