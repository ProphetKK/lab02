const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            //image: './assets/images/socks_green.jpg',
            imageOut: 'https://st2.depositphotos.com/1186248/6498/i/600/depositphotos_64982201-stock-photo-out-of-stock.jpg',
            //inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 100, onSale: true },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false }
            ],
            cart: 0,
            selectedVariant: 0,
            //onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            if(this.onSale == true) {
                return this.brand + ' ' + this.product + ' is on sale'
            }
            else {
                return this.brand + ' ' + this.product
            }
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            return this.variants[this.selectedVariant].onSale
        }
    }
})