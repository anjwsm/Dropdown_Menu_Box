const dropdownButton = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById("dropdown-menu");
const toggleArrow = document.getElementById('arrow-down');



const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
  };


dropdownButton.addEventListener('click' , function(e){
    e.stopPropagation();
    toggleDropdown();
});

const closeDropdown = function (){
    dropdownMenu.classList.remove('show');
    toggleArrow.classList.remove('arrow');
};

document.addEventListener('click',(event)=>{

   console.log('clciked')
    if(!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)){
        closeDropdown();
    }

})