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
	template: '<div style="position:relative">\
		<div  class="input-group col-md-12" >\
<input	type="text" class="form-control" :class="[uiselectclass]" :style="uiselectstyle" v-model="pleasechoose">\
			<span class="input-group-addon printnone" v-on:click = "show"><i class="iconfont icon-xiala2"></i></span>\
		</div>\
		<ul v-show="isshowcity" class="list-unstyled" :class="[uiselectclass]" style="position: absolute;left:0;top:33px;width:100%; border: 1px solid rgb(128, 183, 225);padding:0;background:#fff;max-height:200px;overflow-y:scroll;z-index:100">\
				<li v-for= "item  in items"  v-bind:class="[item.isshowhover?hovercolor:\'\']" @mouseover="mouseover(item)" @mouseout="mouseout(item)" v-on:click.stop="choose($index)">{{item.text}}</li>\
		</ul>\
	</div>\
			',
			/*改变hover 颜色 需要父亲传来需要的颜色给组件显示,同时组件中出现判定是否显示这个颜色*/
	props:['uiselectclass','uiselectstyle','items','hovercolor','pleasechoose'],
	data:function(){
		return {
			isshowcity:false,
			val:''
		}
	},
	methods:{
		show:function(){
			this.isshowcity=!this.isshowcity
		},
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
			this.isshowcity=false;
			this.val=this.items[index].id;
			this.$emit("choose",index,this.val,this.items[index].text)
		},
	},
	
	/**
	 * ready 方法,全局状态下,当点击非组件状态 组件的show=>false
	 */
	ready:function() {
  	 document.addEventListener('click', (e) => {
       if (!this.$el.contains(e.target)) this.isshowcity = false
   		})
}
})
