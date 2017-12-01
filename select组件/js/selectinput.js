/**
 * 2017-11-30
 * by yh
 * 既可以输入 又可以选择的组件
 * 应对于 有表格需求的页面
 * 样式：纯bootstrap 样式和 需要改装的+只有 下横线的当前组件
 * 
 * 
 * 
 */
/*position:relative;overflow: hidden;*/
/*style="width:calc(100% - 40px);position:absolute;left:0;top:0;border-top-right-radius: 0px;border-bottom-right-radius: 0px;"*/
Vue.component('uiselectinput',
{
	template:'\
		<div :style= "uitop">\
			<select  class="form-control btmshow" v-model="haha">\
				<option v-for="list in lists">{{list.text}}</option>\
			</select>\
			<input type="text" class="form-control btmshow" v-model="haha" :style="uiinput"/>\
		</div>',
    	props:['lists','haha'],
    	data:function(){
    		return {
    			uitop:'position:relative;overflow:hidden',
    			uiinput:'width:calc(100% - 40px);position:absolute;left:0;top:0;border-top-right-radius:0px;border-bottom-right-radius:0px'
    		}
    	},
    	methods:{
    		
    	}
})