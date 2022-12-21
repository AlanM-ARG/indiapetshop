const app = Vue.createApp({
    data() {
        return {
            arrayCompleto: [],
            arrayCompletoBackup: [],
            carrito: [],
            juguetes: [],
            maximo: 0,
            minimo: 0,
            total: 0,
            totalNeto: 0,
            medicamentos: [],
            backJuguetes: [],
            backMedicamentos: [],
            arrayCarrousel: [],
            backupArrayCarrousel: [],
            menosStock1: [],
            menosStock2: [],
            menosStock3: [],
            palabraBuscada: "",
            ordenar: "0",
            identificador: (new URLSearchParams(location.search)).get("id"),
            detalles: "",
        }
    },

    created() {
        this.loadData()
    },
    mounted() {
        let almacenamiento = JSON.parse(localStorage.getItem('items'))
        if (almacenamiento) {
            this.carrito = almacenamiento
        }
    },
    methods: {
        loadData() {
                    this.arrayCompleto = [
                        {   
                            _id: 1,
                            imagen: "https://d28hi93gr697ol.cloudfront.net/c8159baa-2b06-6d94-09a8-a494a453defd/img/Producto/257/a72c7a7248e775f0d9e367488c475d0d-6317ef919ac26.webp",
                            nombre: "Collar Ecthol para perros chicos 40 cm",
                            stock: 9,
                            precio: 1320,
                            descripcion: "Collar con antiparasitario externo para el control de pulgas y garrapatas.",
                            tipo: "Medicamento"
                        },
                        {   
                            _id: 2,
                            imagen: "https://d28hi93gr697ol.cloudfront.net/c8159baa-2b06-6d94-09a8-a494a453defd/img/Producto/258/74efcbe8b9e218257eb8545607e262e5-6317ef92609b3.webp",
                            nombre: "Collar Ecthol para perros medianos y grandes 63 cm",
                            stock: 7,
                            precio: 1370,
                            descripcion: "Collar con antiparasitario externo para el control de pulgas y garrapatas.",
                            tipo: "Medicamento"
                        },
                        {   
                            _id: 3,
                            imagen: "https://d28hi93gr697ol.cloudfront.net/c8159baa-2b06-6d94-09a8-a494a453defd/img/Producto/858ec7ea-c4cc-c5f2-5844-84a22f144b8a/SKU-POWERULTRA4-8-1200x1200-635019eec1d79.webp",
                            nombre: "Pipeta Power Ultra para gatos de + 4kg.",
                            stock: 4,
                            precio: 630,
                            descripcion: "Pulguicida, Garrapaticida, también repele moscas y mosquitos.",
                            tipo: "Medicamento"
                        },
                        {   
                            _id: 4,
                            imagen: "https://d28hi93gr697ol.cloudfront.net/c8159baa-2b06-6d94-09a8-a494a453defd/img/Producto/2cd4c41b-2546-49c9-b3ff-4623e6b73263/spoton-0a41-55497745f46f85510915531766020740-1024-1024-63501a4fd0bbe.webp",
                            nombre: "Pipeta Power Ultra para gatos hasta 4kg.",
                            stock: 3,
                            precio: 570,
                            descripcion: "Pulguicida, Garrapaticida, también repele moscas y mosquitos.",
                            tipo: "Medicamento"
                        },
                        {   
                            _id: 5,
                            imagen: "https://d28hi93gr697ol.cloudfront.net/c8159baa-2b06-6d94-09a8-a494a453defd/img/Producto/70a6f8f5-9a88-33ea-98bf-b62222cb9c38/12604-scaled-63501c908cdba.webp",
                            nombre: "Spray Power F para perros y gatos 100 ml",
                            stock: 5,
                            precio: 2409,
                            descripcion: "Pulguicida y garrapaticida para caninos y felinos en spray.",
                            tipo: "Medicamento"
                        },
                        {   
                            _id: 6,
                            imagen: "https://puppis.vteximg.com.br/arquivos/ids/165991-1000-1000/237307.png?v=636862818526900000",
                            nombre: "Pelota Pawise Crinkle Para Gato - Tamaño Único",
                            stock: 2,
                            precio: 264,
                            descripcion: "La pelota Pawise Crinkle para Gatos es una original pelota que con su textura, colores y diseño llama la atención de las mascotas.",
                            tipo: "Juguete"
                        },
                        {   
                            _id: 7,
                            imagen: "https://puppis.vteximg.com.br/arquivos/ids/181424-600-600/246320.jpg?v=637636581689530000",
                            nombre: "Juguete Animal Pet Ratón en Jaula",
                            stock: 5,
                            precio: 1285,
                            descripcion: "El Juguete Animal Pet Ratón en Jaula, es una divertida opción para que tu gato se mantenga entretenido. Gracias a su diseño, tu mascota pasará largas horas de juego intentando capturar el ratón de su interior.",
                            tipo: "Juguete"
                        },
                        {   
                            _id: 8,
                            imagen: "https://puppis.vteximg.com.br/arquivos/ids/183219-1000-1000/237721.jpg?v=637698190480230000",
                            nombre: "Juguete M-Pets Hueso Ecológico - L",
                            stock: 6,
                            precio: 4250,
                            descripcion: "Juguete Perro Grande Hueso Caucho Natural Ecológico M-Pets",
                            tipo: "Juguete"
                        },
                        {   
                            _id: 9,
                            imagen: "https://puppis.vteximg.com.br/arquivos/ids/186289-1000-1000/269253.jpg?v=637854765694100000",
                            nombre: "Pelota de Fútbol Puppis de Vinilo",
                            stock: 8,
                            precio: 1012,
                            descripcion: "La Pelota de Fútbol Puppis de Vinilo es ideal para jugar a lanzar y buscar con tu mascota, logrando mejorar su vínculo e incentivando a que tu perro haga ejercicio. Además, incluye sonido, lo que estimula la mente de tu mascota y ayuda a que descargue energía.",
                            tipo: "Juguete"
                        },
                        {   
                            _id: 10,
                            imagen: "https://puppis.vteximg.com.br/arquivos/ids/180388-1000-1000/237553.jpg?v=637590641427270000",
                            nombre: "Juguete Rascals Bumerang Rojo",
                            stock: 10,
                            precio: 2454 ,
                            descripcion: "Juguete Rascals Bumerang Rojo para Perro",
                            tipo: "Juguete"
                        }
                    ]
                    this.juguetes = this.arrayCompleto.filter(item => item.tipo.includes("Juguete"))
                    this.medicamentos = this.arrayCompleto.filter(item => item.tipo.includes("Medicamento"))
                    this.arrayCompletoBackup = this.arrayCompleto
                    this.backJuguetes = this.juguetes
                    this.backMedicamentos = this.medicamentos
                    this.arrayCarrousel = this.arrayCompleto.sort((a, b) => a.stock - b.stock)
                    this.menosStock1 = [this.arrayCarrousel[0]]
                    this.menosStock2 = [this.arrayCarrousel[1]]
                    this.menosStock3 = [this.arrayCarrousel[2]]
                    this.detalles = this.arrayCompleto.find(item => item._id == this.identificador)                    
                    this.totalNeto = this.carrito.map(item => item.precio).reduce((acumulador, item) => acumulador + item, 0)
                    this.calculo()
        },
        agregarCarrito(producto) {
            if (!this.carrito.includes(producto)) {
                this.carrito.push(producto)
                localStorage.setItem('items', JSON.stringify(this.carrito))
                Swal.fire(
                    '¡Se ha agregado el producto al carrito!',
                    'Ya podés ir al carrito para revisar tus productos agregados',
                )
            }
        },
        eliminarCarrito(producto) {
            Swal.fire({
                title: '¿Estás seguro de eliminar este producto?',
                text: "¡No sera posible revetir este cambio!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Si, eliminalo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.carrito = this.carrito.filter(productoE => productoE != producto)
                    localStorage.setItem('items', JSON.stringify(this.carrito))
                    location.reload(true)
                }
            })
        },
        calculo() {
            let iva = 21;
            let tasa = (this.totalNeto * iva) / 100;
            this.total = (this.totalNeto + tasa);
        }
    },
    computed: {
        filtroInputJuguetes() {
            this.juguetes = this.backJuguetes.filter(juguete => juguete.nombre.toLowerCase().includes(this.palabraBuscada.toLowerCase()))
        },
        filtroInputMedicamentos() {
            this.medicamentos = this.backMedicamentos.filter(medicina => medicina.nombre.toLowerCase().includes(this.palabraBuscada.toLowerCase()))
        },
        filtroSortMedicamentos() {
            if (this.ordenar == "1") {
                this.medicamentos = this.backMedicamentos.sort((a, b) => a.stock - b.stock)
            } else if (this.ordenar == "2") {
                this.medicamentos = this.backMedicamentos.sort((a, b) => a.precio - b.precio)
            } else if (this.ordenar == "3") {
                this.medicamentos = this.backMedicamentos.sort((a, b) => b.precio - a.precio)
            }
        },
        filtroSortJuguetes() {
            if (this.ordenar == "1") {
                this.juguetes = this.backJuguetes.sort((a, b) => a.stock - b.stock)
            } else if (this.ordenar == "2") {
                this.juguetes = this.backJuguetes.sort((a, b) => a.precio - b.precio)
            } else if (this.ordenar == "3") {
                this.juguetes = this.backJuguetes.sort((a, b) => b.precio - a.precio)
            }
        }

    },

}).mount('#app')
