"use strict"

let menu_list = document.querySelectorAll(".menu_list");
const menu_window = document.querySelectorAll(".menu_window");
const menu_window_hidden = document.querySelectorAll(".menu_window_hidden");

//home
menu_list[0].addEventListener("mouseover",function(){
    menu_list.forEach(function(event){
        if(event.children[1]==menu_list[0].children[1]){
            event.children[1].classList.remove("menu_window_hidden");
        }
    });
});
menu_list[0].addEventListener("mouseout",function(){
    menu_list.forEach(function(event){
        if(event.children[1]==menu_list[0].children[1]){
            event.children[1].classList.add("menu_window_hidden");
        }
    });
});
//catalog
menu_list[1].addEventListener("mouseover",function(){
    menu_list.forEach(function(event){
        if(event.children[1]==menu_list[1].children[1]){
            event.children[1].classList.remove("menu_window_hidden");
        }
    });
});
menu_list[1].addEventListener("mouseout",function(){
    menu_list.forEach(function(event){
        if(event.children[1]==menu_list[1].children[1]){
            event.children[1].classList.add("menu_window_hidden");
        }
    });
});
//service
menu_list[2].addEventListener("mouseover",function(){
    menu_list.forEach(function(event){
        if(event.children[1]==menu_list[2].children[1]){
            event.children[1].classList.remove("menu_window_hidden");
        }
    });
});
menu_list[2].addEventListener("mouseout",function(){
    menu_list.forEach(function(event){
        if(event.children[1]==menu_list[2].children[1]){
            event.children[1].classList.add("menu_window_hidden");
        }
    });
});
//contact
menu_list[3].addEventListener("mouseover",function(){
    menu_list.forEach(function(event){
        if(event.children[1]==menu_list[3].children[1]){
            event.children[1].classList.remove("menu_window_hidden");
        }
    });
});
menu_list[3].addEventListener("mouseout",function(){
    menu_list.forEach(function(event){
        if(event.children[1]==menu_list[3].children[1]){
            event.children[1].classList.add("menu_window_hidden");
        }
    });
});