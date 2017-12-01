/**
 * 2017-11-30
 * by yh
 * 既可以输入 又可以选择的组件
 * 应对于 有表格需求的页面
 * 样式：纯bootstrap 样式和 需要改装的+只有 下横线的当前组件
 * vue 版本 新 2.x  新旧版本的  sync 是有差距的  
 * 
 * 使用连续两次的监听方式  适用于 ios 开关（绿色）按钮
 * 
 */
Vue.component('uiselectinput', {
	template: '\
		<div :style= "uitop">\
			<select  class="form-control btmshow" v-model="pp" @change="changeme">\
				<option v-for="list in lists">{{list.text}}</option>\
			</select>\
			<input type="text" class="form-control btmshow" v-model="pp"  v-on:input="updateValue($event.target.value)"  :style="uiinput"/>\
		</div>',
	props: ['lists'],
	data: function() {
		return {
			pp: '',
			uitop: 'position:relative;overflow:hidden',
			uiinput: 'width:calc(100% - 40px);position:absolute;left:0;top:0;border-top-right-radius:0px;border-bottom-right-radius:0px'
		}
	},
	methods: {
		changeme() {
			this.$emit("changeme", this.pp)
		},
		updateValue: function(value) {
			this.$emit('input', Number(value))
		}
	}
})