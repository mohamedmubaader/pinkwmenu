categories = ['Breakfast/الفطور','Appetizers/المقبلات','Salads / السلطات','Burgers / برجر',
'Pizza / بيتزا','Main Course / أطباق رئيسية','Desserts / حلويات','Hot Drinks / مشروبات ساخنه','Cold Drinks / مشروبات باردة']


let navbar = document.getElementById('navbar')

for (j=0; j <= categories.length-1; j++)
{ 
    const li = document.createElement('li')
    const a = document.createElement('a')
    li.classList.add('nav-item')    
    li.appendChild(a)
    a.innerHTML = categories[j]
    a.classList.add('nav-link')
    li.setAttribute('style','font-size:35px; cursor:pointer; hover:font-weight:700')
    navbar.appendChild(li)

    li.addEventListener('click',function(e){
      switch (e.target.innerHTML) {
        case 'Breakfast/الفطور': 
          window.location.href = "breakfast.html"
          break;
        case 'Appetizers/المقبلات': 
          window.location.href = "appetizers.html"
          break;
        case 'Salads / السلطات': 
          window.location.href = "salads.html"
          break;
        case 'Burgers / برجر': 
          window.location.href = "burgers.html"
          break;
        case 'Pizza / بيتزا': 
        window.location.href = "pizza.html"
        break;
        case 'Main Course / أطباق رئيسية': 
          window.location.href = "maincourse.html"
          break;
        case 'Desserts / حلويات': 
          window.location.href = "desserts.html"
          break;
        case 'Hot Drinks / مشروبات ساخنه': 
          window.location.href = "hotdrinks.html"
          break;
        case 'Cold Drinks / مشروبات باردة': 
          window.location.href = "colddrinks.html"
          break;
        default:
      }
    })
}