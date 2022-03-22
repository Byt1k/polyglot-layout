
// Мобильное меню

const menuOpen = document.getElementById('open-menu');
const menuClose = document.getElementById('menu__close');
const menu = document.querySelector('.menu');

menuOpen.addEventListener('click', () => {
    menu.classList.add('active');
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
})

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.menu') && !target.closest("#open-menu")) {
        menu.classList.remove('active')
    }
});

//




// console.log(teachersItem);






const tabsKnowledge = document.querySelector('.knowledge__tabs');
const contentsKnowledge = document.querySelector('.knowledge__contents');
const changeClass = el => {
    for (let i = 0; i < tabsKnowledge.children.length; i++) {
        tabsKnowledge.children[i].classList.remove('active');
    }
    el.classList.add('active');
};


$('.best-teachers__slider').owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    },
    mouseDrag: false,
    touchDrag: false,
});

$('.teachers__slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

$('.reviews__slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
});

const teachersItem = Array.from(document.querySelectorAll('.best-teachers__slider .owl-item:not(.cloned)'));
const teacherNext = document.querySelector('.best-teachers__slider .owl-next');
const teacherPrev = document.querySelector('.best-teachers__slider .owl-prev');
const teacherContent = document.querySelectorAll('.best-teachers-content');
var indexTeacher = 0;
const showIndexTeacher = () => {
    for (let i = 0; i < teachersItem.length; i++) {
        if (teachersItem[i].className === 'owl-item active center') {
            indexTeacher = i + 1;

        }
    }
    for (let i = 0; i < teacherContent.length; i++) {
        teacherContent[i].classList.remove('active');
        // console.log(indexTeacher);
        if (teacherContent[i].dataset.teacher == indexTeacher) {
            teacherContent[i].classList.add('active');

        }
    }
}

showIndexTeacher();
teacherNext.addEventListener('click', showIndexTeacher);
teacherPrev.addEventListener('click', showIndexTeacher);




const tabsCourses = document.querySelector('.courses__tabs');
const contentsCourses = document.querySelector('.courses__contents');

const changeClass1 = el1 => {
    for (let i = 0; i < tabsCourses.children.length; i++) {
        tabsCourses.children[i].classList.remove('active');
    }
    el1.classList.add('active');
};



tabsCourses.addEventListener('click', e => {
    const currTab = e.target.dataset.name;
    changeClass1(e.target);
    for (let i = 0; i < contentsCourses.children.length; i++) {
        contentsCourses.children[i].classList.remove('active');
        if (contentsCourses.children[i].dataset.course === currTab) {
            contentsCourses.children[i].classList.add('active');
        }
    }
});

const typeCourses = document.querySelector('.courses__nav');
const itemCourses = document.querySelector('.courses__item');

const changeClass2 = el2 => {
    for (let i = 0; i < typeCourses.children.length; i++) {
        typeCourses.children[i].classList.remove('active');
    }
    el2.classList.add('active');
};

typeCourses.addEventListener('click', e => {
    const currTab = e.target.dataset.type;
    changeClass2(e.target);
    for (let i = 0; i < itemCourses.children.length; i++) {
        itemCourses.children[i].classList.remove('active');
        if (itemCourses.children[i].dataset.item === currTab) {
            itemCourses.children[i].classList.add('active');
        }
    }
});






tabsKnowledge.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < contentsKnowledge.children.length; i++) {
        contentsKnowledge.children[i].classList.remove('active');
        if (contentsKnowledge.children[i].dataset.content === currTab) {
            contentsKnowledge.children[i].classList.add('active');
        }
    }
});






