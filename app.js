const { createApp, ref, computed } = Vue;

createApp({
	data() {
		return {
			titleMsg: ref(
				'Hmm.. I wonder if you check this... Have fun Working from home :D'
			),
			showMsg: ref(false),

			toggleMsg: () => {
				this.showMsg = !this.showMsg;
			},
		};
	},
}).mount('#app');
