const { createApp, ref, computed } = Vue;

createApp({
    data(){
        return {
            titleMsg: ref("...this is the secret message.  Hello."),
            showMsg: ref(false),

            toggleMsg: () => {
                this.showMsg = !this.showMsg
            }
        }
    }
}).mount("#app")