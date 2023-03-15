import { fnCloseMenu } from "./utils/function.js";

const title = "Bem vindo ao curso de JavaScript + TypeScript";

window.onload = (e)=>{
  document.title = title;
}

const body = document.querySelector("body");
const btnOpen = document.getElementById("btn-open");
const closeMenu = document.querySelectorAll('[data-close="menu"]');
const menuLinks = document.querySelectorAll(".menu a");

if(body){
  if(btnOpen){
    btnOpen.addEventListener("click", (e)=>{
      e.preventDefault();
      e.stopPropagation();
      body.classList.add("open-menu")
    });
  }
  if(closeMenu){
    fnCloseMenu(closeMenu, true)
  }

  if(menuLinks){
    fnCloseMenu(menuLinks)
  }
  
}

