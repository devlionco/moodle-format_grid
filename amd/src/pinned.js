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

const getSectionId = (target) => {
  while(!target.classList.contains(`section`)) {
    target = target.parentNode;
  }
  return sectionId = target.id.replace(/\D+/,'');
}

const addPinnedSection = (target) => {
  let sectionnumber = getSectionId(target);
  let targetSection = document.querySelector(`a[id=gridsection-${sectionnumber}]`);
  targetSection.parentNode.classList.add('pinned');

  refreshPinnedSection();
}

const removePinnedSection = (target) => {
  let sectionnumber = getSectionId(target);
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
  let pinbefore;
  let pinafter;
  if(target.dataset.action === `topinsection`){
    pinbefore = 1;
    pinafter = 0;
  } else {
    pinbefore = 0;
    pinafter = 1;
  }
    // item.href = item.href.replace('pinned=1', 'pinned=0');
    // item.title = "This section is pinned";
    // item.dataset.action = "tounpinsection";
    // item.childNodes[0].classList = "icon fa fa-unlock fa-fw ";
    // item.childNodes[0].title = "This section is pinned";
    // item.childNodes[1].innerText = "Unpin section";
    // var section = getClosest(item, 'li.section');
    // var sectionIndex = section.id.replace( /\D+/g, '');
    // document.querySelector('[aria-labelledby="gridsectionname-'+ sectionIndex +'"]').classList = 'pinned';
    // pinned = document.querySelectorAll(`.gridicons .pinned`);
    // pinnedGridLayout(wrapper, pinned, pinnedBlock);
    target.href = "atik";
    // document.querySelector(`a[id=section-${sectionnumber}] `).href = target.href.replace(`pinned=${pinbefore}`, `pinned=${pinafter}`);

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
                togglePinnedSectionIndicator(target);
                addPinnedSection(target);
                return
              }
              // unset pinned section
              if (target.dataset.action === `tounpinsection`) {
                togglePinnedSectionIndicator(target);
                removePinnedSection(target);
                return
              }
              target = target.parentNode;
            }
          });

        }
    };
});
