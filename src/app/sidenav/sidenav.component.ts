import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

isSearchBarOpen = false;
showSearchInput= true


openSidebar: boolean = true;
value:any


menuSidebar = [
  {
    link_name: "Dashboard",
    link: "/dashboard",
    icon: "bx bx-grid-alt",
    sub_menu: []
  }, {
    link_name: "Total Money",
    link: null,
    icon: "bx bxs-wallet-alt",
    sub_menu: [
  
    ]
  }, {
    link_name: "Transfers",
    link: null,
    icon: "bx bx-transfer",
    sub_menu: [
     
    ]
  }, {
    link_name: "Forms",
    link: "/forms",
    icon: "bx bx-food-menu",
    sub_menu: []
  }, {
    link_name: "Chart",
    link: "/boards",
    icon: "bx bxs-bar-chart-square",
    sub_menu: []
  }, {
    link_name: "Products",
    link: null,
    icon: "bx bxl-product-hunt",
    sub_menu: [
        {
        link_name: "",
        link: "/data7",
      }
    ]
  }, {
    link_name: "Settings",
    link: "/cards",
    icon: "bx bx-cog",
    sub_menu: []
  }, {
    link_name: "Logout ",
    link: "/tables",
    icon: "bx bx-log-in-circle",
    sub_menu: []
  }, 
]


showSubmenu(itemEl: HTMLElement) {
  itemEl.classList.toggle("showMenu");
}

isExpanded = false;

toggleSidebar() {
  this.isExpanded = !this.isExpanded;
}


}
