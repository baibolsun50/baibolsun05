const products = [
    {
        image: "image/02.png",
        id: 1,
        title: "Red Bench",
        bestSeller: "Best Seller",
        prise: "$3.89",
        category: "People",
    },
    {
        image: "image/03.png",
        id: 2,
        title: "Egg Balloon",
        bestSeller: "",
        prise: "$93.89",
        category: "Food",   


    },
    {
        image: "image/03.png",
        id: 3,
        title: "Egg Balloon",
        bestSeller: "",
        prise: "$93.89",
        category: "Food",
    },
    {
        image: "image/04.png",
        id: 4,
        title: "Man",
        bestSeller: "",
        prise: "$100.00",
        category: "People",
    },
    {
        image: "image/05.png",
        id: 5,
        title: "Architecture",
        bestSeller: "",
        prise: "$101.00",
        category: "Landmarks",
    },
    {
        image: "image/05.png",
        id: 6,
        title: "Architecture",
        bestSeller: "",
        prise: "$101.00",
        category: "Landmarks",
    },
    

];
let mainProduct = document.querySelector(".products__main__body");


let cartArray = [];



let showProductHtml = products.map((item) => {
    let bestSellerLabel = item.bestSeller ?`<p>${item.bestSeller}</p>`:""

    return `
    <div class="product__item">
    <div class="product__image">
        <img src=${item.image} alt="photo" />
        ${bestSellerLabel}
        <button onclick="addCart('${item.id}')" class="product__item__add">
            ADD TO CART
        </button>
    </div>
    <p class="product__category">${item.category}</p>
    <h3 class="product__title">${item.title}</h3>
    <div class="product__item__price">${item.prise}</div>
</div>
    `;
});




mainProduct.innerHTML = showProductHtml.join("");''

let cartCount = document.querySelector(".cart__count")
cartCount.innerHTML = cartArray.length;


function ubdateCartCount(){
    cartCount.innerHTML = cartArray.length;
}

function displayCartItems(){
        
    
        let modalMain = document.querySelector(".modal__products");
    
        let showMainProduct = cartArray.map((data) => {
            return`
    <div class="modal__main">
    <div>
    <h4 class="modal__title">${data.title}</h4>
    <p class="modal__price">${data.prise}</p>
    </div>
    <img src="${data.image}" alt="" class="modal__image"/>
    
    
    </div>`
        });
    modalMain.innerHTML = showMainProduct.join("");


}

function addCart(id) {
    let findProduct = products.find((x) => x.id == id)
    if(findProduct){
        cartArray.push(findProduct);
        ubdateCartCount()
        displayCartItems()
    }
}




let cartBtn = document.getElementById("cart")
let modal = document.querySelector(".modal")
let closeBtn = document.getElementById("close")
let clearBtn = document.querySelector(".modal__btn")
cartBtn.onclick = function(){
    modal.style.display = "block";
};
 closeBtn.onclick = function(){
    modal.style.display = "none";
};
clearBtn.onclick = function () {
    cartArray = [];
    ubdateCartCount()
    displayCartItems()
};