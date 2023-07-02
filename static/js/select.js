
let select  = document.querySelectorAll('select');
console.log(select)

select.forEach(elem=>{
    elem.addEventListener('change', ()=>{
        console.log("working");
        let lable = elem.nextElementSibling;
        lable.classList.remove('hide');
    })
})