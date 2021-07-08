const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            imageOut: 'https://st2.depositphotos.com/1186248/6498/i/600/depositphotos_64982201-stock-photo-out-of-stock.jpg',
            inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ],
            cart: 0

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})