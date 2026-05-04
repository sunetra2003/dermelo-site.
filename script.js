const products = {
    men: [
        { name: "Classic Men's Wallet", price: 999, img: "images/m1.jpg" },
        { name: "Leather Slim Wallet", price: 1299, img: "images/m2.jpg" }
    ],
    women: [
        { name: "Women's Stylish Wallet", price: 899, img: "images/wbag1.jpg" },
        { name: "Premium Ladies Wallet", price: 1199, img: "images/wbag2.jpg" }
    ],
    bags: [
        { name: "Leather BagPack", img: "images/bcd1caa6e4e6e54d5487216ab3c43d11.jpg" },
        { name: "Travel Backpack", price: 2499, img: "images/P3.jpg" },
        { name: "Travel Backpack", price: 2499, img: "images/3.jpg" },
        { name: "Travel Backpack", price: 2499, img: "images/P1.jpg" },



    ]
};

function showCategory(category) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    products[category].forEach(item => {
        container.innerHTML += `
            <div class="product">
                <img src="${item.img}">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>
        `;
    });
}

// Default load
showCategory('men');

function shopNow() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}