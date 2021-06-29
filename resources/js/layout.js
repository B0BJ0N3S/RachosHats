class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<header>
        <nav>
            <ul>
                <li class="desktop"><a href="./index.html"><img src="./resources/images/001-frog.svg" alt=""></a></li>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./html/shop.html">Shop</a></li>
                <li><a href="./html/about.html">About</a></li>
                <li><a href="./html/contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>`;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<footer>
        <span>Copyright © 2021</span>
        <span>Created By Matthew Wu</span>
        <span>Icons by Freepik, Smash Icons, Good Ware, Gregor Cresnar, and Pixel Perfect from www.flaticon.com</span>
    </footer>`;
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Contact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<section class="contact">
        <h2>Contact</h2>
        <div class="container">
            <img src="./resources/images/email.png" alt="email icon"><span>businessEmail@gmail.com</span>
            <img src="./resources/images/telephone.png" alt="phone icon"><span>403-123-456</span>
            <img src="./resources/images/facebook.png" alt="facebook logo"><span><a href="fb.com">myFacebookAccount</a></span>
            <img src="./resources/images/instagram.png" alt="instagram logo"><span><a href="instagram.com">myInstagramAccount</a></span>
            <img src="./resources/images/snapchat.png" alt="snapchat logo"><span><a href="snapchat.com">mySnapchat</a></span>
        </div>
    </section>`;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


customElements.define('header-component', Header);
customElements.define('footer-component', Footer);
customElements.define('contact-component', Contact);

const all = {
    Header,
    Footer,
    Contact
}
export default all;
