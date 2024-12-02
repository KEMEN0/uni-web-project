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
        userButton.textContent = 'Sign In';
    }
}
document.addEventListener('DOMContentLoaded', updateUserButton);


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
    }
];



//--------------------------------------------------------------------------------------------------------------------------
//--------------------- functions to display the objets and ther info in both products and cart page -----------------------
//--------------------------------------------------------------------------------------------------------------------------

function displayItems(itemsToDisplay, containerId, isCart = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous items

    itemsToDisplay.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add(isCart ? 'cart-item' : 'product-box');

        const img = document.createElement('img');
        img.src = item.photo;

        const name = document.createElement('h3');
        name.textContent = item.name;

        const info = document.createElement('div');
        info.classList.add(isCart ? 'cart-info' : 'product-info');
        info.innerHTML = isCart ? `
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

        if (isCart) {
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

    if (isCart) {
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

// Function to display cart items
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
    alert('Payment successful!');
});
