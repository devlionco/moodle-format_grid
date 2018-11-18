define(['jquery'], function($) {
'use strict';

const GRIDSECTIONS = document.querySelector(`.gridicons`);

const pinnedWapper = GRIDSECTIONS.querySelector(`.pinnedsections`);
const actionBlock = document.querySelector(`#gridshadebox`);
const sections = Array.from(GRIDSECTIONS.querySelectorAll(`.gridicons li`));
let pinnedSections = Array.from(GRIDSECTIONS.querySelectorAll(`.gridicons .pinned`));


const addPinnedSection = () => {
  pinnedSections = Array.from(GRIDSECTIONS.querySelectorAll(`.gridicons .pinned`));
  pinnedWapper.innerHTML = ``;
  pinnedSections.forEach((item)=>{
    pinnedWapper.appendChild(item);
  });
}

const togglePinnedSectionIndicator = (target) => {
   let buttonIndicator = target.firstChild;
   buttonIndicator.title
}



    return {
        init: function() {

          addPinnedSection();
          actionBlock.addEventListener('click', function(e){
            let target = e.target;
            while(!target.classList.contains(`gridcursor`)) {
              // set pinned section

              if (target.dataset.action === `topinsection`) {
                addPinnedSection();
                return
              }
              // unset pinned section
              if (target.dataset.action === `tounpinsection`) {
                addPinnedSection();
                return
              }
              target = target.parentNode;
            }
          });

        }
    };
});



// let pinned = [];
// let unpinned = [];
//
// sections.forEach((item)=>{
//   if (item.classList.contains(`pinned`)) {
//     pinned.push(item);
//   }else unpinned.push(item);
//   item.style.opacity = 1;
// });
//
//
// sectionsWrap.innerHTML = ``;
// pinned.forEach((item)=>{
//   sectionsWrap.appendChild(item);
// });
// unpinned.forEach((item)=>{
//   sectionsWrap.appendChild(item);
// });
