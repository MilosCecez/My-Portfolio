let languages = document.querySelectorAll('.skill');
let nextBtn = document.querySelector('#next-btn');
let prevBtn = document.querySelector('#prev-btn');

let index = 0;



nextBtn.addEventListener('click', ()=>{
    languages[index].classList.remove('active');
    index ++;
    if(index > languages.length - 1){
        index = 0;
    }
    languages[index].classList.add('active');
});


prevBtn.addEventListener('click', ()=>{
    languages[index].classList.remove('active');
    index --;
    if(index < 0){
        index = languages.length - 1;
    }
    languages[index].classList.add('active');
})