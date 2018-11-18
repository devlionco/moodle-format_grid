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

};



    return {
        init: function() {

          addPinnedSection();
          actionBlock.addEventListener('click', function(e){
            let target = e.target;
            while(!target.classList.contains(`gridcursor`)) {
              if (target.dataset.action === `topinsection`) {
                addPinnedSection();
                return
              }
              target = target.parentNode;
            }
          });

        }
    };
});
