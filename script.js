const products = {
    men: [
        { name: "Classic Men's Wallet", price: 999, img: "images/m1.jpg" },
        { name: "Leather Slim Wallet", price: 1299, img: "images/m2.jpg" },
        { name: "Leather Wallet", price: 1299, img: "images/m3.jpg" },
        { name: "Leather Wallet", price: 1299, img: "images/m4.jpg" },
        { name: "Leather Wallet", price: 1299, img: "images/m5.jpg" },
        { name: "Leather Pouch", price: 1299, img: "images/mbag2.jpg" },
        { name: "Leather Pouch", price: 1299, img: "images/mbag1.jpg" }
    ],
    Belt: [
        { name: "Classic Men's Belt", price: 999, img: "images/belt1.jpg" },
        { name: "Leather Belt", price: 1299, img: "images/belt2.jpg" },
        { name: "Leather Belt", price: 1299, img: "images/belt3.jpg" },
        { name: "Leather Belt", price: 1299, img: "images/belt4.jpg" },
        { name: "Leather Belt", price: 1299, img: "images/belt5.jpg" }
    ],
    women: [
        { name: "Women's Stylish Handbag", price: 699, img: "images/wbag1.jpg" },
        { name: "Premium Ladies Handbagt", price: 1199, img: "images/wbag2.jpg" },
        { name: "Women's Stylish Wallet", price: 899, img: "images/wbag3.jpg" },
        { name: "Premium Ladies Wallet", price: 1599, img: "images/wbag4.jpg" },
        { name: "Women's Stylish poucht", price: 799, img: "images/wbag5.jpg" },
        { name: "Premium Ladies Handbag", price: 1199, img: "images/wbag6.jpg" },
        { name: "Women's Stylish Crossbody Bag", price: 899, img: "images/wbag7.jpg" },
        { name: "Premium Ladies Wallet", price: 1199, img: "images/wbag8.jpg" },
        { name: "Women's Stylish Mini Bag", price: 999, img: "images/wbag9.jpg" },
        { name: "Classic Black Structured Handbag with Gold Hardware ", price: 1199, img: "images/wbag10.jpg" },
        { name: "Women's Stylish Bag", price: 999, img: "images/wbag11.jpg" },

    ],
    bags: [
        { name: "Leather BagPack", price: 1999, img: "images/bcd1caa6e4e6e54d5487216ab3c43d11.jpg" },
        { name: " Backpack", price: 2499, img: "images/P3.jpg" },
        { name: "Travel Backpack", price: 2499, img: "images/3.jpg" },
        { name: " Backpack", price: 2499, img: "images/P1.jpg" },
        { name: " Backpack", price: 2499, img: "images/P2.jpg" },
        { name: " Backpack", price: 2499, img: "images/P4.jpg" },
        { name: "Travel Backpack", price: 2499, img: "images/P5.jpg" }
    ]
};

function showCategory(category) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    // Using products[category] to pull the correct list
    products[category].forEach(item => {
        // CHANGED: class="product" to class="product-card" to match your fresh CSS
        container.innerHTML += `
            <div class="product-card">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹${item.price || 'Price on request'}</p>
            </div>
        `;
    });
}

// Default load when the page opens
window.onload = () => {
    showCategory('men');
};

// Smooth scroll for the Shop Now button
function shopNow() {
    const section = document.getElementById("products");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}