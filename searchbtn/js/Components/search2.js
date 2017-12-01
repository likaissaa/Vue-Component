/*!
 * Search
 * 17-07-17
 * Released by yh
 */

/**
 * make a search components
 * @param {String} move2
 * @param {String} old2
 * @param {String} move1
 * @param {String} old1
 * @param {String} cancel1
 * @param {String} cancel2
 * @param {String} placeholder
 */
Vue.component('ui-search2', {
	template: '<div class="lst_nobor"><div class="reloh"><form action="#" v-on:submit="submits" >\<input v-model="inputtext" type="search"  class="radius05 h30 vm boxs red font14" v-on:click="touchme" v-bind:class="[\'transition1 w100p\',inputclass,isselected? move2: old2]" v-bind:placeholder="placeholder" /></form><i v-bind:class="[\'transition1\',isselected? move1:old1]" class="ht30 red" ><img src="img/mysearch.png" class="img16 vm"/></i><span v-bind:class="[\'absoh ht30 transition1 red\',isselected? cancel1:cancel2]" v-on:click="cancel">取消</span></div></div>',
	props: ['move2','old2','move1','old1','cancel1','cancel2','placeholder','inputclass'],
	data: function() {
		return {
			isselected: false,
			inputtext:''
		}
	},

	methods: {
		/**
		 * 鼠标点击时间
		 */
		touchme: function() {
			this.isselected=true;
			this.$emit("touchme")
		},
		/**
		 * 取消实践
		 */
		cancel: function() {
			this.isselected=!this.isselected;
			this.inputtext=""
			this.$emit("cancel")
		},
		/**
		 * pc键盘回车+移动端搜索功能
		 */
		submits: function() { //移动端提交
			this.$emit("submits",this.inputtext)
		}
	}
})