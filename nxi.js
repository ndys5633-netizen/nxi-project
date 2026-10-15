const openbtn = document.getElementById('openbtn')
const closebtn= document.getElementById('closebtn')
const sidebar = document.querySelector('.code')
openbtn.addEventListener('click' , function(){
    sidebar.classList.add('active');
})
closebtn.addEventListener('click' , function() {
    sidebar.classList.remove('active');
})
