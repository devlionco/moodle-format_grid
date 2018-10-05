define(['jquery'], function($) {
'use strict';

const sectionsWrap = document.querySelector(`.gridicons`);
const sections = Array.from(document.querySelectorAll(`.gridicons li`));


    return {
        init: function() {

          let pinned = [];
          let unpinned = [];

          sections.forEach((item)=>{
            if (item.classList.contains(`pinned`)) {
              pinned.push(item);
            }else unpinned.push(item);
            item.style.opacity = 1;
          });


          sectionsWrap.innerHTML = ``;
          pinned.forEach((item)=>{
            sectionsWrap.appendChild(item);
          });
          unpinned.forEach((item)=>{
            sectionsWrap.appendChild(item);
          });
          console.dir('init pinned section')
        }
    };
});
