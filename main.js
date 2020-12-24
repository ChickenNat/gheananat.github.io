//smooth scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

//burger
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navbar = document.querySelector('.navbar')
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

//active filter image
const filterContainer =  document.querySelector('.porto-filter'),
portoItems = document.querySelectorAll('.porto-item');

filterContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('filter-item')){
        //inactive 'filter-item'
        filterContainer.querySelector('.active').classList.remove('active');
        //active new 'filter-item'
        event.target.classList.add('active');

        const filterValue = event.target.getAttribute('data-filter');
        console.log(filterValue);
        portoItems.forEach((item) =>{
            if(item.classList.contains(filterValue) || filterValue === 'all'){
                item.classList.add("show");
                item.classList.remove("hide");
            }else{
                item.classList.add("hide");
                item.classList.remove("show");
            }
        })
    }
});