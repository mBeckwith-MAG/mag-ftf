const { createApp, ref, computed } = Vue;

createApp({
    data(){
        return {
            titleMsg: ref("Please Kiki, don't be mad at me... I didn't mean to ignore you... i didn't mean to leave you stranded down stairs all alone to carry your computer.... Please, Please, Please, forgive me!"),
            showMsg: ref(false),

            toggleMsg: () => {
                this.showMsg = !this.showMsg
            }
        }
    }
}).mount("#app")