const { createApp } = Vue

createApp({

    data() {

        return {}

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

        }




    },

    computed: {

        // carousel() {
        //     let image1 = document.getElementsByClassName("carousel-1")[0];
        //     let image2 = document.getElementsByClassName("carousel-2")[0];
        //     let image3 = document.getElementsByClassName("carousel-3")[0];



        //     if (image1.hasAttribute("checked")) {

        //         console.log(image1.hasAttribute("checked"));

        //         image1.removeAttribute("checked")
        //         image2.setAttribute("checked", "")

        //     } else if (image2.hasAttribute("checked")) {

        //         console.log(image1.hasAttribute("checked"));

        //         image2.removeAttribute("checked")
        //         image3.setAttribute("checked", "")

        //     } else if (image3.hasAttribute("checked")) {

        //         console.log(image1.hasAttribute("checked"));
        //         image3.removeAttribute("checked")
        //         image1.setAttribute("checked", "")

        //     }

        // },

    },

}).mount('#app')