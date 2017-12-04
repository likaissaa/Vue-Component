/**
 * 2017-11-30
 * by yh
 * 既可以输入 又可以选择的组件
 * 应对于 有表格需求的页面
 * 样式：纯bootstrap 样式和 需要改装的+只有 下横线的当前组件
 * vue 版本 qqt 1.0.26
 * 
 * 
 * 
 */
/*position:relative;overflow: hidden;*/
/*style="width:calc(100% - 40px);position:absolute;left:0;top:0;border-top-right-radius: 0px;border-bottom-right-radius: 0px;"*/
Vue.component('uiselectinput', {
	template: '\
		<div :style= "uitop">\
			<select  class="form-control" :class="selectclass"  v-on:click="clickselect">\
			</select>\
			<input type="text" class="form-control" :class="inputclass" v-model="allname" :style="uiinput"/>\
			<ul class="cityselect" v-show="isshowcityselect">\
				<li>\
					<select id="cmbProvince" name="cmbProvince" class="form-control" style="display:none;"></select>\
					<select id="cmbCity" name="cmbCity" class="form-control"></select>\
					<select id="cmbArea" name="cmbArea" class="form-control"></select>\
				</li>\
				<li>\
				</li>\
					<div class="btn btn-default col-md-12" v-on:click="showcityselect()">确定</div>\
		</div>',
	props: ['selectclass', 'inputclass', 'allname'],
	data: function() {
		return {
			isshowcityselect: false,
			uitop: 'position:relative;',
			uiinput: 'width:calc(100% - 40px);position:absolute;left:0;top:0;border-top-right-radius:0px;border-bottom-right-radius:0px'
		}
	},
	/**
	 * ready 方法,全局状态下,当点击非组件状态 组件的show=>false
	 */
	ready: function() {
		document.addEventListener('click', (e) => {
			if(!this.$el.contains(e.target))
				this.isshowcityselect = false
		})
	},
	methods: {
		clickselect: function() {
			this.isshowcityselect = !this.isshowcityselect
		},
		showcityselect: function() {
			this.isshowcityselect = false
			
			this.$dispatch("wocao")
		}
	}
})