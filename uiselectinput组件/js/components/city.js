/**
 * 2017-12-4
 * by yh
 * 既可以输入 又可以选择的组件
 * 应对于 城市选择 但是又希望 可以输入和选择的组件
 * 样式：纯bootstrap 样式和 需要改装的+只有 下横线的当前组件
 * vue 版本 qqt 1.0.26
 * 
 * 
 * 
 */
/*position:relative;overflow: hidden;*/
/*style="width:calc(100% - 40px);position:absolute;left:0;top:0;border-top-right-radius: 0px;border-bottom-right-radius: 0px;"*/
Vue.component('cityselectinput', {
	template: '\
		<div :style= "uitop">\
			<select  class="form-control" :class="selectclass"  v-on:click="clickselect">\
			</select>\
			<input type="text" class="form-control" :class="inputclass" v-model="allname" :style="uiinput"/>\
			<ul class="cityselect" v-show="isshowcityselect">\
				<li>\
					<select :id="id1" :name="name1" class="form-control" style="display:none;"></select>\
					<select :id="id2" :name="name2" class="form-control"></select>\
					<select :id="id3" :name="name3" class="form-control"></select>\
				</li>\
				<li>\
					<div class="btn btn-default col-md-12" v-on:click="showcityselect()">确定</div>\
				</li>\
		</div>',
	props: ['selectclass', 'inputclass', 'allname','name1','name2','name3','id1','id2','id3'],
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