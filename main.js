const items = [
    {
        type: "phone",
        name: "Google Pixel 7 Pro",
        screen: "6.7 inches",
        cpu: "Tensor G2",
        ram: "12 GB",
        storage: "256 GB",
        camera: "50 MP",
        battery: "5000 mAh",
        price: 899,
        color: "obsidian",
        photo: "https://lh3.googleusercontent.com/5qBRAVj82xMbqRBAXs80U-COEfA-8WQ0RFZbux3Du_GBYGHx4fqTTxLUP3XRCGXOfCJss31jKxoHavdlggeqDGYwD6cdmpy6SwM",
        releaseDate: "2022-10-06",
        rating: 4.5
    },
    {
        type: "tablet",
        name: "iPad Pro 12.9",
        screen: "12.9 inches",
        cpu: "M2",
        ram: "16 GB",
        storage: "1 TB",
        camera: "12 MP",
        battery: "9720 mAh",
        price: 1299,
        color: "silver",
        photo: "https://i5.walmartimages.com/seo/Apple-12-9-inch-iPad-Pro-2018-Wi-Fi-Cellular-256GB_de20f884-082a-4731-b479-9f811639120f_1.3a432e7f29b7cb0896417adb46a6bc46.jpeg",
        releaseDate: "2022-09-15",
        rating: 4.8
    },
    {
        type: "laptop",
        name: "Dell XPS 15",
        screen: "15.6 inches",
        cpu: "Intel i9-12900H",
        ram: "32 GB",
        storage: "1 TB",
        camera: "720p",
        battery: "8600 mAh",
        price: 1999,
        color: "platinum silver",
        photo: "https://m.media-amazon.com/images/I/717Lo8oZaAL._AC_SL1500_.jpg",
        releaseDate: "2022-10-06",
        rating: 4.5
    },
    {
        type: "phone",
        name: "OnePlus 11",
        screen: "6.7 inches",
        cpu: "Snapdragon 8 Gen 2",
        ram: "16 GB",
        storage: "512 GB",
        camera: "50 MP",
        battery: "5000 mAh",
        price: 699,
        color: "eternal green",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe44qS3XsYY3DsNTObV_QjxYGRvI18DGfEcg&s"
    },
    {
        type: "smartwatch",
        name: "Samsung Galaxy Watch 5",
        screen: "1.4 inches",
        cpu: "Exynos W920",
        ram: "1.5 GB",
        storage: "16 GB",
        camera: "N/A",
        battery: "410 mAh",
        price: 279,
        color: "white",
        photo: "https://media.extra.com/s/aurora/100317787_800/Samsung-Galaxy-Watch-5%2C-44MM%2C-Silver?locale=en-GB,en-*,*"
    },
    {
        type: "laptop",
        name: "HP Spectre x360",
        screen: "13.5 inches",
        cpu: "Intel i7-1255U",
        ram: "16 GB",
        storage: "512 GB",
        camera: "5 MP",
        battery: "6600 mAh",
        price: 1399,
        color: "nightfall black",
        photo: "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/S400887680_1?1725205334"
    },
    {
        type: "tablet",
        name: "Samsung Galaxy Tab S8 Ultra",
        screen: "14.6 inches",
        cpu: "Snapdragon 8 Gen 1",
        ram: "12 GB",
        storage: "512 GB",
        camera: "13 MP",
        battery: "11200 mAh",
        price: 1099,
        color: "graphite",
        photo: "https://images.samsung.com/is/image/samsung/p6pim/ae/sm-x906bzaamea/gallery/ae-galaxy-tab-s8-ultra-5g-x906-sm-x906bzaamea-534175120?$720_576_JPG$"
    },
    {
        type: "phone",
        name: "Xiaomi Mi 12 Ultra",
        screen: "6.73 inches",
        cpu: "Snapdragon 8 Gen 1",
        ram: "12 GB",
        storage: "512 GB",
        camera: "50 MP",
        battery: "4860 mAh",
        price: 899,
        color: "black",
        photo: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666613862.55361324.png"
    },
    {
        type: "laptop",
        name: "ASUS ROG Zephyrus G14",
        screen: "14 inches",
        cpu: "Ryzen 9 6900HS",
        ram: "16 GB",
        storage: "1 TB",
        camera: "720p",
        battery: "7600 mAh",
        price: 1699,
        color: "eclipse gray",
        photo: "https://images-cdn.ubuy.co.in/633fec90328a6f66f3526dd3-asus-rog-zephyrus-g14-14-fhd-led.jpg"
    },
    {
        type: "gaming console",
        name: "PlayStation 5",
        screen: "N/A",
        cpu: "AMD Ryzen Zen 2",
        ram: "16 GB",
        storage: "825 GB",
        camera: "N/A",
        battery: "N/A",
        price: 499,
        color: "white",
        photo: "https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3wxNDQ4OTF8aW1hZ2UvanBlZ3xhRGsyTDJneE9TOHlOamczT0RFM01qZzRPVEV4T0M4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfDcyMmNmODcwYWRmYzkwNTEzZTViZTczYjU4MTdhYTgwOGUxMjc2NmZjYjc4MGQ3MTI1NTlkY2RlMjVmMjA1YmQ"
    },
    {
        type: "tablet",
        name: "Microsoft Surface Pro 9",
        screen: "13 inches",
        cpu: "Intel i7-1255U",
        ram: "16 GB",
        storage: "512 GB",
        camera: "10 MP",
        battery: "6400 mAh",
        price: 1599,
        color: "sapphire blue",
        photo: "https://cdn.dxomark.com/wp-content/uploads/medias/post-151145/Microsoft-Surface-Pro-9-_featured-image-packshot-review.jpg"
    },
    {
        type: "smartwatch",
        name: "Apple Watch Series 8",
        screen: "1.9 inches",
        cpu: "Apple S8",
        ram: "1 GB",
        storage: "32 GB",
        camera: "N/A",
        battery: "308 mAh",
        price: 399,
        color: "midnight",
        photo: "https://eshop.bh.zain.com/sites/default/files/ImagesDir/2022-09/MNHV3AEA.png"
    },
    {
        type: "gaming console",
        name: "Xbox Series X",
        screen: "N/A",
        cpu: "AMD Zen 2",
        ram: "16 GB",
        storage: "1 TB",
        camera: "N/A",
        battery: "N/A",
        price: 499,
        color: "black",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUkSlfL58Y0Vh6jXLZZZGn8utamenAMQpcA&s"
    },
    {
        type: "phone",
        name: "Sony Xperia 1 IV",
        screen: "6.5 inches",
        cpu: "Snapdragon 8 Gen 1",
        ram: "12 GB",
        storage: "512 GB",
        camera: "12 MP",
        battery: "5000 mAh",
        price: 1199,
        color: "frosted purple",
        photo: "https://d2e6ccujb3mkqf.cloudfront.net/9b57c2b1-644c-47f0-9185-429ec7682266-1_de88756b-1d18-4ced-afec-1e4ba157601d.jpg"
    },
    {
        type: "laptop",
        name: "Lenovo ThinkPad X1 Carbon",
        screen: "14 inches",
        cpu: "Intel i7-1260P",
        ram: "16 GB",
        storage: "1 TB",
        camera: "1080p",
        battery: "5700 mAh",
        price: 1899,
        color: "black",
        photo: "https://microless.com/cdn/products/28a3f27f9cc916daec71af0d1cf60cd0-hi.jpg"
    }
];











//--------------------------------------------------------------------------------------
//----- filter items in home page (new arrivals, best sellers, featured products)-------
//--------------------------------------------------------------------------------------
// display new arrivals
function displayNewArrivals() {
    const sortedItems = items.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    const newArrivals = sortedItems.slice(0, 3);
    displayProductList(newArrivals);
}

document.addEventListener('DOMContentLoaded', () => {
    displayNewArrivals();
    updateUserButton();
});

// display best sellers
function displayBestSellers() {
    const sortedItems = items.sort((a, b) => b.rating - a.rating);
    const bestSellers = sortedItems.slice(0, 3);
    displayProductList(bestSellers);
}

// display featured products
function displayFeaturedProducts() {
    const featuredProducts = getRandomItems(items, 3);
    displayProductList(featuredProducts);
}

// display product list
function displayProductList(itemsToDisplay) {
    const container = document.getElementById('product-list-container');
    container.innerHTML = ''; 

    itemsToDisplay.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('product-box');

        const img = document.createElement('img');
        img.src = item.photo;

        const name = document.createElement('h3');
        name.textContent = item.name;

        const info = document.createElement('div');

        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.onclick = () => addToCart(items.indexOf(item));

        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        itemDiv.appendChild(info);
        itemDiv.appendChild(button);
        container.appendChild(itemDiv);
    });
}



//---------------------------------------------------------------
//--------------- filter items in products page -----------------
//---------------------------------------------------------------
function filterItems(type) {
    if (type === 'all') {
        displayItems(items);
    } else {
        const filteredItems = items.filter(item => item.type === type);
        displayItems(filteredItems);
    }
}

//---------------------------------------------------------------
//--------------- adding items to prod page----------------------
//---------------------------------------------------------------
function displayItems(itemsToDisplay) {
    const container = document.getElementById('item-container');
    container.innerHTML = ''; // Clear previous items on the page

    itemsToDisplay.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('product-box');

        const img = document.createElement('img');
        img.src = item.photo;

        const name = document.createElement('h3');
        name.textContent = item.name;

        const info = document.createElement('div');
        info.classList.add('product-info');
        info.innerHTML = `
            <p>Price: $${item.price}</p>
            <div class="additional-info" style="display: none;">
                <p>Type: ${item.type}</p>
                <p>Screen: ${item.screen}</p>    
                <p>Color: ${item.color}</p>    
                <p>CPU: ${item.cpu}</p>
                <p>RAM: ${item.ram}</p>
                <p>Storage: ${item.storage}</p>
                <p>Camera: ${item.camera}</p>
                <p>Battery: ${item.battery}</p>
            </div>
        `;
            //a button to view more info
        const viewMoreButton = document.createElement('button');
        viewMoreButton.textContent = 'View More';
        viewMoreButton.classList.add('view-more-btn');
        viewMoreButton.onclick = () => {
            const moreInfo = info.querySelector('.additional-info');
            moreInfo.style.display = 'block';
            viewMoreButton.style.display = 'none'; 
        };
            //a button to add to cart
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = () => addToCart(items.indexOf(item));

        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        itemDiv.appendChild(info);
        itemDiv.appendChild(viewMoreButton);
        itemDiv.appendChild(addToCartButton);
        container.appendChild(itemDiv);
    });
}

//---------------------------------------------------------------
//--------------- adding items to cart --------------------------
//---------------------------------------------------------------
function addToCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(cartItem => cartItem.name === items[index].name);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        const itemToAdd = { ...items[index], quantity: 1 };
        cart.push(itemToAdd);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${items[index].name} has been added to the cart.`);
    displayCartItems(); // Refresh cart display to update quantity
}

//---------------------------------------------------------------
//--------------- displaying items in cart ----------------------
//---------------------------------------------------------------
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-container');
    container.innerHTML = ''; // Clear previous items on the page

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        const img = document.createElement('img');
        img.src = item.photo;

        const name = document.createElement('p');
        name.textContent = item.name;

        const info = document.createElement('div');
        info.innerHTML = `
            <p class="cart-price">Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;

        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.onclick = () => addToCart(index);

        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.onclick = () => removeFromCart(index);

        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        itemDiv.appendChild(info);
        itemDiv.appendChild(addButton);
        itemDiv.appendChild(removeButton);
        container.appendChild(itemDiv);
    });

    updateTotalPrice(); // Update total price after displaying cart items
}

//---------------------------------------------------------------
//--------------- remove from cart ------------------------------
//---------------------------------------------------------------
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Refresh cart display to update quantity
}

//---------------------------------------------------------------
//--------------- update the total in cart ----------------------
//---------------------------------------------------------------
function updateTotalPrice() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}

//---------------------------------------------------------------
//------ display items on cart as soon as the page loads --------
//---------------------------------------------------------------
if (document.getElementById('cart-container')) {
    displayCartItems();
}

//---------------------------------------------------------------
//-display items on the products page as soon as the page loads -
//---------------------------------------------------------------
if (document.getElementById('item-container')) {
    displayItems(items);
}

//---------------------------------------------------------------
//--------------- handle sign-up --------------------------------
//---------------------------------------------------------------
function signUp(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const mobileNo = document.getElementById('mobile-no').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('sign-up-username').value;
    const password = document.getElementById('sign-up-password').value;

    // Validation
    if (firstName.length < 3) {
        alert('First Name should have at least 3 characters.');
        return;
    }
    if (lastName.length < 3) {
        alert('Last Name should have at least 3 characters.');
        return;
    }
    if (!/^\d{8}$/.test(mobileNo)) {
        alert('Mobile No must contain exactly 8 digits.');
        return;
    }

    if (localStorage.getItem(username)) {
        alert('Username already exists!');
    } else {
        const user = {
            firstName,
            lastName,
            mobileNo,
            email,
            username,
            password
        };
        localStorage.setItem(username, JSON.stringify(user));
        alert('Sign-up successful!');
    }
}

//---------------------------------------------------------------
//--------------- handle sign-in --------------------------------
//---------------------------------------------------------------
function signIn(event) {
    event.preventDefault();
    const username = document.getElementById('sign-in-username').value;
    const password = document.getElementById('sign-in-password').value;

    const user = JSON.parse(localStorage.getItem(username));
    if (user && user.password === password) {
        localStorage.setItem('loggedInUser', username);
        alert('Sign-in successful!');
        updateUserButton();
    } else {
        alert('Invalid username or password!');
    }
}

//---------------------------------------------------------------
//--------------- handle sign-out -------------------------------
//---------------------------------------------------------------
function signOut() {
    localStorage.removeItem('loggedInUser');
    alert('Sign-out successful!');
    updateUserButton();
}

//---------------------------------------------------------------
//--------------- update the user button ------------------------
//---------------------------------------------------------------
function updateUserButton() {
    const userButton = document.getElementById('user-button');
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        userButton.textContent = loggedInUser;
    } else {
        userButton.textContent = 'Sign In';
    }
}

//---------------------------------------------------------------
//------ update user button on page load ------------------------
//---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', updateUserButton);

//---------------------------------------------------------------
//--------------- get URL parameter -----------------------------
//---------------------------------------------------------------
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

//---------------------------------------------------------------
//------ check URL parameter and filter items on page load ------
//---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const type = getUrlParameter('type');
    if (type) {
        filterItems(type);
    } else {
        displayItems(items);
    }
});