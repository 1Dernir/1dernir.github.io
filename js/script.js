let next             = document.getElementById('next');
let back             = document.getElementById('back');
let slider           = document.getElementById('slider');
let slides           = document.getElementsByClassName('slide');
let paginator        = document.getElementById('paginator');
let paginatorItem    = document.getElementsByClassName('js-page');
let nightBtn         = document.getElementById('theme-input');
var nightMode        = localStorage.getItem('nightMode');

if (slides.length < 2) { //не отображать пагинатор, если страниц меньше 2
  paginator.style.display = "none";
}

for (var i = 1; i < slides.length; i++) {
  slides[i].classList.add('invisible');
}

function createPage() {
  let page = document.getElementById('page');
  for (var i = 0; i < slides.length; i++) {
    let paginatorPageList = document.createElement('li');
    var paginatorPageNum = document.createElement('a');

    paginatorPageList.className = "js-page-item";

    if (i == 0) {
      paginatorPageNum.className = "paginator-item active js-page";
    } else {
      paginatorPageNum.className = "paginator-item js-page";
    }

    paginatorPageNum.innerText = i + 1;
    page.appendChild(paginatorPageList);

      let pageItem = document.getElementsByClassName('js-page-item');
      pageItem[i].appendChild(paginatorPageNum);
  }

}
createPage();

function paginatorNumber() {
  for (let j = 0; j < slides.length; j++) {
    slides[j].classList.add('slide-id' + j);
  }

  for (let j = 0; j < paginatorItem.length; j++) {

    paginatorItem[j].addEventListener('click', function() {
      let activeEl = document.querySelector('.active');
      activeEl.classList.remove('active');
      activeEl.classList.toggle('invisible');
      slides[j].classList.add('active');
      slides[j].classList.toggle('invisible');

      for (let j = 0; j < paginatorItem.length; j++) {
        if (paginatorItem[j].className.indexOf('active') != -1) {
          let paginatorActiveEl  = paginatorItem[j];
          paginatorActiveEl.classList.remove('active');
          invis();
          // heightResize();
        }
      }
      paginatorItem[j].classList.add('active');
      invis();
      heightResize();
    });
  }
}
paginatorNumber();

next.onclick = function (event) {
  event.preventDefault();

  let activeEl = document.querySelector('.active');

  for (let i = 0; i < paginatorItem.length; i++) {
    if (paginatorItem[i].className.indexOf('active') != -1) {
      var paginatorActiveEl  = paginatorItem[i];
      var pageNumActive = i + 1;
    }
  }


  if (activeEl.nextElementSibling) {
    // activeEl.style.left = "-100%";
    activeEl.classList.remove('active');
    activeEl.classList.add('invisible');
    activeEl.nextElementSibling.classList.add('active');

    paginatorActiveEl.classList.remove('active');
    paginatorItem[pageNumActive].classList.add('active');
  }
  invis();
  heightResize();
}

back.onclick = function (event) {
  event.preventDefault();

  let activeEl = document.querySelector('.active');

  for (let i = 0; i < paginatorItem.length; i++) {
    if (paginatorItem[i].className.indexOf('active') != -1) {
      var paginatorActiveEl  = paginatorItem[i];
      var pageNumActive = i - 1;
    }
  }

  if (activeEl.previousElementSibling) {
    // activeEl.previousElementSibling.style.left = "5px";
    activeEl.classList.remove('active');
    activeEl.classList.add('invisible');
    activeEl.previousElementSibling.classList.add('active');

    paginatorActiveEl.classList.remove('active');
    paginatorItem[pageNumActive].classList.add('active');
  }
  invis();
  heightResize();
}

function invis() {
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].className.indexOf('active') == -1) {
      slides[i].classList.add('invisible');
    }
  }
}

function heightResize() {
  let widthPage = document.documentElement.clientWidth;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].className.indexOf('active') != -1) {
      var countContent = slides[i].getElementsByClassName('content-item');
    }
  }
// ресайз для десктоп
  if ((countContent.length < 4) && (widthPage > 740)) {
    slider.style.minHeight = "300px";
  } else {
    slider.style.minHeight = "600px";
  }
// ресайз для планшетов
  if ((countContent.length < 3) && (515 < widthPage) && (widthPage < 740)) {
    slider.style.minHeight = "300px";
  } else if ((countContent.length < 5) && (515 < widthPage) && (widthPage < 740)) {
      slider.style.minHeight = "600px";
    } else if ((countContent.length > 4) && (515 < widthPage) && (widthPage < 740)) {
      slider.style.minHeight = "900px";
      }
// ресайз для телефонов
  if ((countContent.length == 1) && (515 > widthPage)) {
    slider.style.minHeight = "300px";
  } else if ((countContent.length == 2) && (515 > widthPage)) {
      slider.style.minHeight = "600px";
    } else if ((countContent.length == 3) && (515 > widthPage)) {
        slider.style.minHeight = "900px";
      } else if ((countContent.length == 4) && (515 > widthPage)) {
          slider.style.minHeight = "1200px";
        } else if ((countContent.length == 5) && (515 > widthPage)) {
            slider.style.minHeight = "1500px";
          } else if ((countContent.length == 6) && (515 > widthPage)) {
              slider.style.minHeight = "1800px";
            }
}
heightResize();


if (nightMode == null) {
  nightMode = 'false';
}

function changeTheme() {
  let body      = document.body;
  let header    = document.getElementById('js-header');
  let slides    = document.getElementsByClassName('content-item');
  let paginator = document.getElementById('paginator');
  let footer    = document.getElementById('js-footer');

  if (nightMode == 'true') {
    nightBtn.setAttribute('checked', 'checked');
    body.classList.add('body-black');
    header.classList.add('block-black');
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.add('block-black');
      slides[i].classList.add('block-black-hover');
    }
    paginator.classList.add('block-black');
    footer.classList.add('block-black');
  } else if (nightMode == 'false'){
      nightBtn.removeAttribute('checked');
      body.classList.remove('body-black');
      header.classList.remove('block-black');
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('block-black');
        slides[i].classList.remove('block-black-hover');
      }
      paginator.classList.remove('block-black');
      footer.classList.remove('block-black');
  }
}
changeTheme();

nightBtn.onclick = function () {
  if (nightMode == 'false') {
    nightMode = localStorage.setItem('nightMode', 'true');
    nightMode = 'true';
  } else if (nightMode == 'true') {
    nightMode = localStorage.setItem('nightMode', 'false');
    nightMode = 'false';
  }
  changeTheme();
}


























// end
