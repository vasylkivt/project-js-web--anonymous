const e=document.querySelectorAll(".js-header-nav-link");console.log("pagesEl:",e);const t=window.location.pathname;console.log("windowPathName:",t),e.forEach((e=>{const s=new URL(e.href).pathname;console.log("pageLinkPathname:",s),"/"===t&&"/index.html"===s&&e.classList.add("active"),s===t&&e.classList.add("active")}));const s=document.querySelector(".js-theme-switch-toggle"),a=document.querySelector("body"),c="light-theme",o="dark-theme";s.addEventListener("change",(function(e){let t="";e.currentTarget.checked?(t=c,a.classList.remove(o),a.classList.add(t)):(t=o,a.classList.add(t),a.classList.remove(c));localStorage.setItem("theme",t)})),function(){const e=localStorage.getItem("theme");e?a.classList.add(e):a.classList.add(o),e===c&&s.setAttribute("checked",!0)}();
//# sourceMappingURL=my-library.665424df.js.map
