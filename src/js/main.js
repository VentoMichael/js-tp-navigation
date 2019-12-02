// let subMenu = document.querySelectorAll('.sub-menu');
// let titleMenu = document.querySelectorAll('.menu-title');
// document.documentElement.classList.add('js-enabled');
//
// for (let i = 0; i < titleMenu.length; i++){
//     titleMenu[i].addEventListener('mouseover',showMenu);
//     titleMenu[i].addEventListener('mouseout',hideMenu);
//     function showMenu() {
//         subMenu[i].style.display = "block";
//         subMenu[i].style.backgroundColor = "red";
//         subMenu[i].style.color = "white";
//     }
//     function hideMenu() {
//         subMenu[i].style.display = "none";
//     }
//}


(function MenuShowHide () {
    const MenuNavigation = {
        init() {
            this.subMenu = document.querySelectorAll('.sub-menu');
            this.titleMenu = document.querySelectorAll('.menu-title');
            document.documentElement.classList.add('js-enabled');
            this.boucle();
        },
        boucle: function () {
            for (let i = 0; i < this.titleMenu.length; i++) {
                this.titleMenu[i].addEventListener('mouseover', () => {
                    this.subMenu[i].style.display = "block";
                    this.subMenu[i].style.backgroundColor = "red";
                    this.subMenu[i].style.color = "white";
                });
                this.titleMenu[i].addEventListener('mouseout', () => {
                    this.subMenu[i].style.display = "none";
                });

            }}
        };
    MenuNavigation.init();
})();