const { createApp, ref, computed } = Vue;

createApp({
	data() {
		return {
			messages: ref([
				'Hmm.. I wonder if you check this... Have fun Working from home :D',
				"I can just keep adding more... until you tell me you saw it... I'll just keep adding.",
			]),
			showMsg: ref(false),

			toggleMsg: () => {
				this.showMsg = !this.showMsg;
			},
		};
	},
}).mount('#app');
