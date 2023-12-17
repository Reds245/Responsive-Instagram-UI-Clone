const menuItems = document.querySelectorAll('.btn-aside');
const navItems = document.querySelectorAll('.nav-notif');

//  NGASiH AKTIF CLASS
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

// LAINNYA 
const lainnyo = document.querySelector('#lainnyo');
const lainnya = document.querySelector('#lainnya');
const lainnyaSec = document.querySelector('.custom-theme');
const lainnyaSec1 = document.querySelector('.custom-theme');
var root = document.querySelector(':root');
const gantiWarna = document.querySelectorAll('.pilih-tema span');

// NGASIH POPUP NOTIF NAVBAR

// NGASIH POPUP NOTIF
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notif'){
            document.querySelector('.notif-grup').style.display = 'none';
        } else {
            document.querySelector('.notif-grup').style.display = 'block';
            document.querySelector('#notif.notif-grup').style.display = 'none';
        }
    })
})

//  NGASIH LAINNYA
const openLainnyaSec = () => {
    lainnyaSec.style.display = 'grid'
}

// NGILANBIN LAINNYA

lainnyaSec.addEventListener('click', closeLainnyaSec = (e) => {
    if(e.target.classList.contains('custom-theme')){
        lainnyaSec.style.display =  'none';
    }
})

lainnya.addEventListener('click',openLainnyaSec);


//  NGASIH LAINNYA
const openLainnyaSec1 = () => {
    lainnyaSec1.style.display = 'grid'
}

// NGILANBIN LAINNYA

lainnyaSec1.addEventListener('click', closeLainnyaSec1 = (e) => {
    if(e.target.classList.contains('custom-theme')){
        lainnyaSec1.style.display =  'none';
    }
})

lainnyo.addEventListener('click',openLainnyaSec1);





// ======================
// SEARCH BAR
// ======================


const searchBar = document.querySelector(".fa-solid");

searchBar.addEventListener("keyup", () => {
  if(searchBar.value && clearIcon.style.visibility != "visible"){
    clearIcon.style.visibility = "visible";
  } else if(!searchBar.value) {
    clearIcon.style.visibility = "hidden";
  }
});


// CHANGE COLOR
const changeActiveColorClass = () => {
    gantiWarna.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

gantiWarna.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();
        
        if(color.classList.contains('color-1')){
            primaryHue = 213;
        } else if(color.classList.contains('color-2')){
            primaryHue = 7;
        } else if(color.classList.contains('color-3')){
            primaryHue = 288;
        } else if(color.classList.contains('color-4')){
            primaryHue = 310;
        } else if(color.classList.contains('color-5')){
            primaryHue = 115;
        } 
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

