//--------------------------------------------------------------------------------------------------------------------------
//------------------------------------ sign up & in & out ------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------

function signUp(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const mobileNo = document.getElementById('mobile-no').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('sign-up-username').value;
    const password = document.getElementById('sign-up-password').value;

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


function signOut() {
    localStorage.removeItem('loggedInUser');
    alert('Sign-out successful!');
    updateUserButton();
}

function updateUserButton() {
    const userButton = document.getElementById('user-button');
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        userButton.textContent = loggedInUser;
    } else {
        userButton.textContent = 'Sign In or register';
    }
}
document.addEventListener('DOMContentLoaded', updateUserButton);



// this will toggle the menu when its clicked 
document.addEventListener('DOMContentLoaded', () => {
    const userButton = document.getElementById('user-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    userButton.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!dropdownContent.contains(event.target) && event.target !== userButton) {
            dropdownContent.style.display = 'none';
        }
    });
});


//--------------------------------------------------------------------------------------------------------------------------
//------------------------------------ objects/Items -----------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------

const items = [
    {
        type: "phone",
        name: "iPhone 16 Pro",
        screen: "6.1 inches",
        cpu: "A16 Bionic",
        ram: "8 GB",
        storage: "512 GB",
        camera: "48 MP",
        battery: "4000 mAh",
        price: 1099,
        color: "titanium dessert",
        photo: "assets/iphone16pro.jpg",
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
        photo: "assets/ipad.jpg",
        releaseDate: "2022-09-15",
        rating: 4.8
    },
    {
        type: "laptop",
        name: "MacBook Air",
        screen: "13.3 inches",
        cpu: "Apple M1",
        ram: "8 GB",
        storage: "256 GB",
        camera: "720p",
        battery: "5000 mAh",
        price: 999,
        color: "space gray",
        photo: "assets/APPLE-MacBook-Air.jfif",
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
        photo: "https://lh3.googleusercontent.com/5qBRAVj82xMbqRBAXs80U-COEfA-8WQ0RFZbux3Du_GBYGHx4fqTTxLUP3XRCGXOfCJss31jKxoHavdlggeqDGYwD6cdmpy6SwM"
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
        photo: "https://m.media-amazon.com/images/I/717Lo8oZaAL._AC_SL1500_.jpg"
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



//--------------------------------------------------------------------------------------------------------------------------
//--------------------- functions to display the objets and ther info in both products and cart page -----------------------
//--------------------------------------------------------------------------------------------------------------------------

function displayItems(itemsToDisplay, containerId, inCart = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 

    itemsToDisplay.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add(inCart ? 'cart-item' : 'product-box');

        const img = document.createElement('img');
        img.src = item.photo;

        const name = document.createElement('h3');
        name.textContent = item.name;

        const info = document.createElement('div');
        info.classList.add(inCart ? 'cart-info' : 'product-info');
        info.innerHTML = inCart ? `
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        ` : `
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

        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        itemDiv.appendChild(info);

        if (inCart) {
            const addButton = document.createElement('button');
            addButton.textContent = '+';
            addButton.onclick = () => addToCart(items.findIndex(i => i.name === item.name));

            const removeButton = document.createElement('button');
            removeButton.textContent = '-';
            removeButton.onclick = () => removeFromCart(index);

            itemDiv.appendChild(addButton);
            itemDiv.appendChild(removeButton);
        } else {
            const viewMoreButton = document.createElement('button');
            viewMoreButton.textContent = 'View More';
            viewMoreButton.classList.add('view-more-btn');
            viewMoreButton.onclick = () => {
                info.querySelector('.additional-info').style.display = 'block';
                viewMoreButton.style.display = 'none';
            };

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.onclick = () => addToCart(index);

            itemDiv.appendChild(viewMoreButton);
            itemDiv.appendChild(addToCartButton);
        }

        container.appendChild(itemDiv);
    });

    if (inCart) {
        updateTotalPrice();
    }
}
function filterItems(type) { 
    if (type === 'all') {
        displayItems(items, 'item-container');
    } else {
        const filteredItems = items.filter(item => item.type === type);
        displayItems(filteredItems, 'item-container');
    }
}

function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayItems(cart, 'cart-container', true);
}

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
    displayCartItems();
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function updateTotalPrice() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const taxAndShipping = 79;
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0) + taxAndShipping;
    const totalPriceElement = document.getElementById('total-price');
    if (totalPriceElement) {
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
}
document.addEventListener('DOMContentLoaded', updateTotalPrice);

// Display cart items on page load if on cart page
if (document.getElementById('cart-container')) {
    displayCartItems();
}

// Display all items initially if on products page
if (document.getElementById('item-container')) {
    displayItems(items, 'item-container');
}







//--------------------------------------------------------------------------------------------------------------------------
//------------------------------------ Payment page -----------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------


document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const cardName = document.getElementById('card-name').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;

    if (!/^\d{16}$/.test(cardNumber)) {
        alert('Card Number must be 16 digits.');
        return;
    }
    if (cardName.length < 3) {
        alert('Name on Card should have at least 3 characters.');
        return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert('Expiry Date must be in MM/YY format.');
        return;
    }
    if (!/^\d{3}$/.test(cvv)) {
        alert('CVV must be 3 digits.');
        return;
    }
    if (address.length < 5) {
        alert('Address should have at least 5 characters.');
        return;
    }
    if (city.length < 3) {
        alert('City should have at least 3 characters.');
        return;
    }
    if (!/^\d{5}$/.test(zip)) {
        alert('ZIP Code must be 5 digits.');
        return;
    }

    // If all validations pass
    alert('Payment successful! you will receive your order soon.');
    window.location.href = 'home.html';

});
