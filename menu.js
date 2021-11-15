let buttonclick = document.getElementsByClassName('btn-danger')
for(var i=0;i<buttonclick.length;i++)
{
    var button = buttonclick[i]
    button.addEventListener('click', removeItem)
}
var quantityInput = document.getElementsByClassName('cart-quantity-input')
for(var i=0;i<quantityInput.length;i++)
{
    var input = quantityInput[i]
    input.addEventListener('change', quantityChanged)
}
var addtocartbuttons = document.getElementsByClassName('cartbutton')
for(var i=0;i<addtocartbuttons.length;i++)
{
    var button = addtocartbuttons[i]
    button.addEventListener('click', addToCartButtonClicked)
}
document.getElementsByClassName('btn-purchase')[0].addEventListener('click',orderClicked)

function orderClicked(event)
{
    alert('Thankyou for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes())
    {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}
function addToCartButtonClicked(event)
{
    var button  = event.target
    var cartItem = button.parentElement.parentElement
    var title = cartItem.getElementsByClassName('cart-name')[0].innerText
    var img = cartItem.getElementsByClassName('cart-img')[0].src
    var price = cartItem.getElementsByClassName('cart-price')[0].innerText
    console.log(title,img,price)
    addItemTOCart(title,img,price)
    updateCartTotal()
}

function addItemTOCart(title,img,price)
{
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartitems = document.getElementsByClassName('cart-items')[0]
    var carItemsNames = cartitems.getElementsByClassName('cart-item-title')
    for(var i=0;i<carItemsNames.length;i++)
    {
        if(carItemsNames[i].innerHTML == title)
        {
            alert('Item Alredy Added!')
            return
        }
    }
    var cartRowContents = `<div class="cart-ITEM cart-column">
    <img class="cart-item-image" src="${img}" alt="" >
    <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-PRICE cart-column">${price}</span>
    <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`
    cartRow.innerHTML += cartRowContents
    cartitems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
    alert("Item Added!")
}

function removeItem(event)
{
    let va = event.target
    va.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event)
{
    var input = event.target
    if(isNaN(input.value) || input.value <= 0)
    {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal()
{
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName("cart-row")
    var total = 0
    for(var i=0;i<cartRows.length;i++)
    {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-PRICE')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price =  parseFloat(priceElement.innerText.replace("RS:",''))
        var quantity = quantityElement.value
        total += price*quantity
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText ="RS:" +total
}


let heading = document.querySelectorAll('.heading')
for(var i =0;i<heading.length;i++)
{
    button = heading[i]
    button.addEventListener('click',display)
}

function display(event)
{
    button = event.target
    console.log(button.innerText);
    let tali = document.getElementsByClassName('tali')[0]
    let burger = document.getElementsByClassName('burger')[0]
    let snacks = document.getElementsByClassName('snacks')[0]
    tali.style.display = 'none'
    burger.style.display = 'none'
    snacks.style.display = 'none'
    if (button.innerText == 'Non-veg')
    {
        if( tali.style.display == 'none')
        {
            tali.style.display = 'grid'
        }
        else if(tali.style.display == 'grid')
        {
            tali.style.display = 'none'
        }       
    }
    else if(button.innerText == 'Veg')
    {
        console.log('burger');
        
        if( burger.style.display == 'none')
        {
            burger.style.display = 'grid'
        }
        else if(burger.style.display == 'none')
        {
            burger.style.display = 'grid'
        }
    }
    else
    {   
        if( snacks.style.display == 'none')
        {
            snacks.style.display = 'grid'
        }
        else if(snacks.style.display == 'grid')
        {
            snacks.style.display = 'none'
        }
    }
}