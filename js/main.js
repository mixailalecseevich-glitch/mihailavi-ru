document.addEventListener("DOMContentLoaded",()=>{
  const button=document.querySelector("[data-menu-button]");
  const menu=document.querySelector("[data-menu]");
  const year=document.querySelector("[data-year]");

  if(year){year.textContent=String(new Date().getFullYear())}

  if(!button||!menu){return}

  const closeMenu=()=>{
    button.setAttribute("aria-expanded","false");
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  const openMenu=()=>{
    button.setAttribute("aria-expanded","true");
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");
  };

  button.addEventListener("click",()=>{
    const isOpen=button.getAttribute("aria-expanded")==="true";
    if(isOpen){closeMenu()}else{openMenu()}
  });

  menu.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));

  document.addEventListener("keydown",event=>{
    if(event.key==="Escape"){closeMenu();button.focus()}
  });

  window.matchMedia("(min-width: 721px)").addEventListener("change",event=>{
    if(event.matches){closeMenu()}
  });
});
