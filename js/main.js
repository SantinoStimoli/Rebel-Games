const { createApp } = Vue

createApp({

    data() {

        return {
            existRegister: false,
        }

    },
    created() { },

    methods: {

        moveSidebar() {
            let button = document.getElementById("button-menu").classList;
            let spanCategories = document.getElementsByClassName("span-categories")[0].classList;
            let sidebar = document.getElementsByClassName("sidebar-categories")[0].classList;

            if (spanCategories.length == 1) {
                button.add("open")
                sidebar.add("active")
                spanCategories.add("transparent")
            } else {
                button.remove("open")
                sidebar.remove("active")
                spanCategories.remove("transparent")
            }
        },

        moveUser() {
            let dropdown = document.getElementsByClassName("user-dropdown")[0].classList;

            if (dropdown.length == 1) {
                dropdown.add("active")
            } else {
                dropdown.remove("active")
            }

        },

        functionExistRegister() {
            console.log("existRegister")
            this.existRegister = true
        },
        functionExistLogin() {
            this.existRegister = false
        }




    },

    computed: {


    },

}).mount('#app')