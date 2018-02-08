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
Vue.component('uiselect',
	{
	template: '\
		<div >\
			<input  v-on:click.self = "show=!show"  class="form-control"  :class="[uiselectclass]" :style="uiselectstyle" v-model="pleasechoose"  v-on:input="updateValue($event.target.value)">\
			<div v-show="show" class="panel panel-primary" :class="uiselectclass" style="max-height:200px;width:100%;overflow-y:scroll">\
				<div v-for= "(item,index)  in items"  v-bind:class="[item.isshowhover?hovercolor:\'\']" @mouseover="mouseover(item)" @mouseout="mouseout(item)" v-on:click.stop="choose(index)">{{item.text}}</div>\
			</div>\
		</div>\
			',
			/*改变hover 颜色 需要父亲传来需要的颜色给组件显示,同时组件中出现判定是否显示这个颜色*/
	props:['uiselectclass','uiselectstyle','items','hovercolor'],
	data:function(){
		return {
			show:false,
			val:'',
			pleasechoose:'请选择',
		}
	},
	methods:{
		/**
		 * 鼠标hover事件 ,hover定义item.isshowhover=>true
		 * @param {Object} item
		 * @param {Object} index
		 */
		
		mouseover:function(item,index){
			item.isshowhover = true;
		},
		/**
		 * 鼠标mouseout事件 hover定义item.isshowhover=>false
		 * @param {Object} item
		 * @param {Object} index
		 */
		
		mouseout:function(item,index){
			item.isshowhover = false;
		},
		/**
		 * 点击choose 事件,子组件传递参数到父组件 索引=>index,id=>val,文本=>text
		 * @param {Object} index
		 */
		
		choose:function(index){
			this.pleasechoose=this.items[index].text
			this.show=false;
			this.val=this.items[index].id;
			this.$emit("choose",index,this.val,this.pleasechoose)
		},
		updateValue: function(value) {
			this.show=false;
			console.log(value)
			this.$emit('input',value)
		}
	},
	
	/**
	 * ready 方法,全局状态下,当点击非组件状态 组件的show=>false
	 */
	mounted:function() {
  	 document.addEventListener('click', (e) => {
       if (!this.$el.contains(e.target)) this.show = false
   		})
}
})
