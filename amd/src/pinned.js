define(['jquery', 'format_grid/modal'], function($, modal) {
'use strict';

const GRIDSECTIONS = document.querySelector(`.gridicons`);
const MAXCOUNTSECTION = 4;

const pinnedWapper = GRIDSECTIONS.querySelector(`.pinnedsections`);
const actionBlock = document.querySelector(`#gridshadebox`);
const sections = Array.from(GRIDSECTIONS.querySelectorAll(`.gridicons li`));

let pinnedSections = Array.from(GRIDSECTIONS.querySelectorAll(`.gridicons .pinned`));


const refreshPinnedSection = () => {
  // find pinned section
  pinnedSections = Array.from(GRIDSECTIONS.querySelectorAll(`.gridicons .pinned`));
  pinnedWapper.innerHTML = ``;
  pinnedSections.forEach((item)=>{
    pinnedWapper.appendChild(item);
  });
}

const addPinnedSection = (target) => {
  while(!target.classList.contains(`section`)) {
    target = target.parentNode;
  }
  let sectionnumber = target.id.replace(/\D+/,'');
  let targetSection = document.querySelector(`a[id=gridsection-${sectionnumber}]`);
  targetSection.parentNode.classList.add('pinned');

  refreshPinnedSection();
}

const removePinnedSection = (target) => {
  while(!target.classList.contains(`section`)) {
    target = target.parentNode;
  }
  let sectionnumber = target.id.replace(/\D+/,'');
  let targetSection = document.querySelector(`a[id=gridsection-${sectionnumber}]`);
  targetSection.parentNode.classList.remove('pinned');

  refreshPinnedSection();
}


/**
 * change pinned section indecation
 *
 * @param {Node} target element
 * @returns {Integer}
 */
const togglePinnedSectionIndicator = (target) => {
   let buttonIndicator = target.firstChild;
   buttonIndicator.title;
}

/**
 * checking the allowed number of sections
 *
 * @param {}
 * @returns {bool}
 */
const checkMaxCountOfPinnedSection = () => {
  return (pinnedWapper.childElementCount < MAXCOUNTSECTION)? 1 : 0;
}


    return {
        init: function() {

          refreshPinnedSection();
          actionBlock.addEventListener('click', function(e){
            let target = e.target;
            while(!target.classList.contains(`gridcursor`)) {
              // set pinned section

              if (target.dataset.action === `topinsection`) {
                if (!checkMaxCountOfPinnedSection()) {
                  // modal.setModal();
                  return;
                }
                addPinnedSection(target);
                return
              }
              // unset pinned section
              if (target.dataset.action === `tounpinsection`) {
                removePinnedSection(target);
                return
              }
              target = target.parentNode;
            }
          });

        }
    };
});
