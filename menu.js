categories = ['Breakfast/الفطور','Appetizers/المقبلات','Salads/السلطات','Main Course/أطباق رئيسية','Desserts/حلويات','Coffee/القهوه ','Drinks/المشروبات']

//'Burgers / برجر','Pizza / بيتزا',

let navbar = document.getElementById('navbar')

for (j=0; j <= categories.length-1; j++)
{ 
    const li = document.createElement('li')
    const a = document.createElement('a')
    li.classList.add('nav-item')    
    li.appendChild(a)
    a.innerHTML = categories[j]
    a.classList.add('nav-link')
    li.setAttribute('style','font-size:23px; cursor:pointer; font-weight:bold')
    navbar.appendChild(li)

    li.addEventListener('click',function(e){
      switch (e.target.innerHTML) {
        case 'Breakfast/الفطور': 
          window.location.href = "breakfast.html"
          break;
        case 'Appetizers/المقبلات': 
          window.location.href = "appetizers.html"
          break;
        case 'Salads/السلطات': 
          window.location.href = "salads.html"
          break;
        // case 'Burgers / برجر': 
        //   window.location.href = "burgers.html"
        //   break;
        // case 'Pizza / بيتزا': 
        // window.location.href = "pizza.html"
        // break;
        case 'Main Course/أطباق رئيسية': 
          window.location.href = "maincourse.html"
          break;
        case 'Desserts/حلويات': 
          window.location.href = "desserts.html"
          break;
        case 'Coffee/القهوه ': 
          window.location.href = "coffee.html"
          break;
        case 'Drinks/المشروبات': 
          window.location.href = "drinks.html"
          break;
        default:
      }
    })
}