document.addEventListener("DOMContentLoaded",()=>{
  const button=document.querySelector("[data-menu-button]");
  const menu=document.querySelector("[data-menu]");
  const year=document.querySelector("[data-year]");
  const cookieBanner=document.querySelector("[data-cookie-banner]");
  const cookieAccept=document.querySelector("[data-cookie-accept]");
  const cookieReject=document.querySelector("[data-cookie-reject]");
  const cookieSettings=document.querySelector("[data-cookie-settings]");
  const telegramCopy=document.querySelector("[data-copy-telegram]");
  const telegramCopyLabel=document.querySelector("[data-copy-label]");
  const telegramCopyStatus=document.querySelector("[data-copy-status]");
  const cookieStorageKey="mihail-cookie-choice";

  if(year){year.textContent=String(new Date().getFullYear())}

  const readCookieChoice=()=>{
    try{return window.localStorage.getItem(cookieStorageKey)}catch{return null}
  };

  const saveCookieChoice=choice=>{
    try{window.localStorage.setItem(cookieStorageKey,choice)}catch{}
    if(cookieBanner){cookieBanner.hidden=true}
  };

  if(cookieBanner){
    cookieBanner.hidden=readCookieChoice()!==null;
    cookieAccept?.addEventListener("click",()=>saveCookieChoice("accepted"));
    cookieReject?.addEventListener("click",()=>saveCookieChoice("rejected"));
    cookieSettings?.addEventListener("click",()=>{
      cookieBanner.hidden=false;
      cookieReject?.focus();
    });
  }

  if(telegramCopy){
    telegramCopy.addEventListener("click",async()=>{
      const contact="@Mixail_AVITO";
      try{
        await navigator.clipboard.writeText(contact);
      }catch{
        const field=document.createElement("textarea");
        field.value=contact;
        field.setAttribute("readonly","");
        field.style.position="fixed";
        field.style.opacity="0";
        document.body.append(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      if(telegramCopyLabel){telegramCopyLabel.textContent="Скопировано"}
      if(telegramCopyStatus){telegramCopyStatus.hidden=false}
    });
  }

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
