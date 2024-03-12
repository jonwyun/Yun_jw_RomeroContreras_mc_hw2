export { Dough, Topping, Cookie };

// Dough class
class Dough {
    constructor(
        name, 
        image
    ) {
        this.name = name;
        this.image = image;
    }

    createOptionElement() {
        const wrapperDiv = document.createElement('div');
        const label = document.createElement('label');
        label.innerHTML += this.displayImage(); 
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'dough';
        input.value = this.name;
        input.classList.add('dough-input')
        label.appendChild(input);    
        label.classList.add('dough-label');
        wrapperDiv.appendChild(label);
        wrapperDiv.classList.add('dough-wrapper');
        return wrapperDiv;
    }

    displayImage() {
        return `<img src="${this.image}" alt="${this.name} Dough" class="dough-image" width=200px height=200px>`;
    }
}

// Topping class
class Topping {
    constructor(
        name, 
        image
    ) {
        this.name = name;
        this.image = image;
    }

    createOptionElement() {
        const wrapperDiv = document.createElement('div');
        const label = document.createElement('label');
        label.innerHTML += this.displayImage();
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'topping';
        input.value = this.name;
        input.classList.add('topping-input')
        label.appendChild(input);    
        label.classList.add('topping-label');
        wrapperDiv.appendChild(label);
        wrapperDiv.classList.add('topping-wrapper');
        return wrapperDiv;
    }

    displayImage() {
        return `<img src="${this.image}" alt="${this.name} Topping" class="topping-image" width=200px height=200px>`;
    }
}

// Cookie class
class Cookie {
    constructor(
        dough, 
        topping
    ) {
        this.dough = dough;
        this.topping = topping;
    }

    getCookieImage() {
        if (this.dough.name === 'Plain' && this.topping.name === 'Chocolate Chips') {
            return 'images/cookie1.webp';
        } else if (this.dough.name === 'Plain' && this.topping.name === 'Nuts') {
            return 'images/cookie2.jpg';
        } else if (this.dough.name === 'Chocolate Chip' && this.topping.name === 'Chocolate Chips') {
            return 'images/cookie3.jpg';
        } else if (this.dough.name === 'Chocolate Chip' && this.topping.name === 'Nuts') {
            return 'images/cookie4.jpg';
        } else {
            return 'images/default_cookie.jpg'; 
        }
    }
}

