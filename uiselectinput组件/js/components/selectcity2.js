/*父子通信-------像子组件传入一个当前选中的id 子组件的  选中的id 油select 选定*/
/*!
 * Select
 * 17-07-14
 * Released by yh
 */

/**
 * make a search components
 * @param {String} uiselectclass
 * @param {String} uiselectstyle
 * @param {Object} items
 * @param {String} hovercolor
 */

Vue.component('uiselectcity', {
	template: '<div style="position:relative">\
		<div  class="input-group col-md-12"  v-on:click = "show">\
<input	type="text" class="form-control" v-on:input="updateValue($event.target.value)" v-bind:value="val" :class="[uiselectclass]" :style="uiselectstyle" v-model="pleasechoose">\
			<span class="input-group-addon printnone"><i class="iconfont icon-xiala2"></i></span>\
		</div>\
		<ul v-show="isshowcity" class="list-unstyled" :class="[uiselectclass]" style="position: absolute;left:0;top:33px;width:100%; border: 1px solid rgb(128, 183, 225);padding:0;background:#fff;max-height:200px;overflow:auto;z-index:100;">\
				<li>\
					<select :id="id1" :name="name1" class="form-control" style="display:none;"></select>\
					<select :id="id2" :name="name2" v-el:citynames class="form-control" v-model="cityname1"></select>\
					<select :id="id3" :name="name3" v-el:districtnames class="form-control" v-model="districtname" @change="showcityselect()"></select>\
				</li>\
				<li>\
					<div class="btn btn-default col-md-12" v-on:click="showcityselect()">确定</div>\
				</li>\
		</ul>\
	</div>\
			',
	/*改变hover 颜色 需要父亲传来需要的颜色给组件显示,同时组件中出现判定是否显示这个颜色*/
	props: ['pleasechoose', 'uiselectclass', 'uiselectstyle', 'items', 'hovercolor', 'name1', 'name2', 'name3', 'id1', 'id2', 'id3'],
	data: function() {
		return {
			val: '',
			isshowcity: false,
			cityname1: '',
			districtname: '',
		}
	},
	methods: {
		show: function() {
			this.isshowcity = !this.isshowcity
		},
		/**
		 * 鼠标hover事件 ,hover定义item.isshowhover=>true
		 * @param {Object} item
		 * @param {Object} index
		 */

		mouseover: function(item, index) {
			item.isshowhover = true;
		},
		/**
		 * 鼠标mouseout事件 hover定义item.isshowhover=>false
		 * @param {Object} item
		 * @param {Object} index
		 */

		mouseout: function(item, index) {
			item.isshowhover = false;
		},
		showcityselect: function() {
			this.$nextTick(function() {
				this.isshowcity = false
				this.cityname1 = this.$els.citynames.value
				this.districtname = this.$els.districtnames.value
				var allname = this.cityname1 + this.districtname
				this.pleasechoose = allname
			})

		},
		updateValue: function(value) {
			this.isshowcity = false;
		}
	},

	/**
	 * ready 方法,全局状态下,当点击非组件状态 组件的show=>false
	 */
	ready: function() {
		console.log(this.name1)
		addressInit(this.name1, this.name2, this.name3);
		document.addEventListener('click', (e) => {
			if(!this.$el.contains(e.target)) this.isshowcity = false
		})
	}
})