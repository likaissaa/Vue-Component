/*html
 <yh-search :caption="caption"   v-on:touchme="touchme" v-on:cancel="cancel"v-on:submit="shit"></yh-search>

*/

/*css
 * 
 * 
 * 		input[type=search]{          
            color: #E03030;
            text-shadow: 0px 0px 0px black;
            -webkit-text-fill-color: transparent;
        }
         input[type=search]::-webkit-search-cancel-button{
   		 -webkit-appearance: none;//此处只是去掉默认的小×
		}
        input[type=search]::-webkit-input-placeholder{
        	color:red;
            text-shadow: 0 0 0 red;
            -webkit-text-fill-color: initial;
        }
 
 * */
Vue.component('yh-search', {
	template: '\
				<div class="lst bgred ht30">\
					<div class="reloh">\
					<div class="absoh" id="icon" v-bind:style="icon"></div>\
					<form action="#" v-on:submit="submits" >\
						<input v-bind:style="old" id="search-input" v-model="haha" class="font14 bd red marginauto boxs radius05" type="search" v-on:click="touchme" v-bind:placeholder="caption"/>\
						<span class="red absoh inbo w10p center" v-bind:style="canceltext" id="canceltext" v-on:click="cancel">取消</span>\
					</form>\
					</div> \
				</div>\
				',
	props: {
		icon: {
			type: Object,
			default: function() {
				return {
					width: '20px',
					height: '20px',
					background: 'url(img/mysearch.png) no-repeat center',
					position: 'absolute',
					top: '5px',
					left: '22%',
					backgroundSize: '16px 16px'
				}
			}
		},
		canceltext: {
			type: Object,
			default: function() {
				return {
					right: '-100px'
				}
			}
		},
		old: {
			type: Object,
			default: function() {
				return {
					textIndent: '30%',
					width: '100%',
					height: '30px'
				}
			}
		},
		caption: String
	},
	data: function() {
		return {
			haha: ''
		}
	},

	methods: {
		touchme: function() {
			$("#icon").animate({
				left: "2%"
			}, 100);
			$("#search-input").animate({
				"text-indent": "10%",
				"width": "90%"
			}, 100);
			$("#canceltext").animate({
				right: '0px'
			});
			this.$emit("touchme");
		},
		cancel: function() {
			this.haha = '';
			$("#icon").animate({
				left: "22%"
			}, 100);
			$("#search-input").animate({
				"text-indent": "30%",
				"width": "100%"
			}, 100);
			$("#canceltext").animate({
				right: '-100px'
			});
			this.$emit("cancel");
		},
		enter: function() {
			this.$emit("submit");
		},
		submits: function() { //移动端提交
			this.$emit("submits", this.haha);
		}
	}
})