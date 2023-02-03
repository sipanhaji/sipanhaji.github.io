function header_hamburger_menu() {
    let hamburger_menu = document.querySelector('.hamburger_box');
    let pathSelect = hamburger_menu.querySelector('.svg_two');
    hamburger_menu.addEventListener('click', function hamburger(_hamburgeropen) {
        _hamburgeropen = document.querySelector('.menu_container');
        
        if (_hamburgeropen.style.marginTop == "-100vh" || _hamburgeropen.style.marginTop == 0  ) {
            _hamburgeropen.style.marginTop = 0;
            pathSelect.style.margin = '1px auto 1px auto';
        }
         else {
            _hamburgeropen.style.marginTop = -100 + "vh";
            pathSelect.style.margin = '8px auto 8px auto';
        } 
    })
}
header_hamburger_menu();