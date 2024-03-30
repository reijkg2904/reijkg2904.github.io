const container = document.querySelectorAll(".container");
const contentsList = document.querySelectorAll(".contents-list");

  /*==============================================*\

  INTRO SLIDE IS TRIGGERED WHEN THE LOGO IS CLICKED

  \*==============================================*/

document.getElementById("main-logo").onclick = function() {
        var count = 0;
        while (count<container.length) {
            container[count++].classList.remove('open');
        }
        container[0].classList.add('open');
    };


/*===========================*\

WHEN CONTENT LISTS ARE CLICKED, 
THE CORRESPONDING SLIDE SHOWS.

\*===========================*/

const cards = document.getElementsByClassName("cards");

 for (let i = 0; i < contentsList.length; i++) {
        contentsList[i].onclick = function() {
            var count=0;
            while(count<container.length) {
            container[count++].classList.remove('open');
            };
            if (contentsList[i] === contentsList[2]){
                var moreCount = 0;
                while (moreCount<tiles.length) {
                    tiles[moreCount++].classList.remove('open');
                }
                tiles[0].classList.add('open');
            } else if (contentsList[i] === contentsList[4]){
                var anotherCount = 0;
                while (anotherCount<cards.length) {
                    cards[anotherCount++].classList.remove('open');
                }
                cards[0].classList.add('open');
        };
        container[i+1].classList.add('open');
    };
};


  /*========PROJECT LINKS======== */

  const tiles = document.getElementsByClassName("project-tile");
  const projectList = document.getElementsByClassName("click-list");

  for (let i = 0; i < projectList.length; i++) {
    projectList[i].onclick = function() {
        var count = 0;
        while (count<tiles.length) {
            tiles[count++].classList.remove('open');
        };
        tiles[i+1].classList.add('open');
    };
  };

/*========SKILLS SLIDE======== */
   let slideIndex = 1;

function plusDivs(n) {
    if (cards[0].classList.contains('open')) {
        slideIndex = 1;
    }
    showDivs(slideIndex += n);
  };
  function showDivs(n) {
    var i;
    if (n > cards.length) {slideIndex = 1};
    if (n < 1) {slideIndex = cards.length}; 
    if (cards[0].classList.contains('open')) {

    }
    for (i = 0; i < cards.length; i++) { 
      cards[i].classList.remove('open'); 
    };
    cards[slideIndex-1].classList.add('open');  
  };




