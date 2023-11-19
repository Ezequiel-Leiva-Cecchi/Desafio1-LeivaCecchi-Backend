
class ProductManager {
    constructor() {
        // Inicializa la lista de productos.
        this.products = [];
    }

    static id = 0;

    // Método para agregar productos con validación de código único.
    addProducts(title, description, price, stock, code, image) {
        // Validación: Verifica si el código del producto ya existe en la lista.
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                return console.log(`El código ${code} se está repitiendo`);
            }
        }

        // Crea un nuevo objeto de producto.
        const nuevosProducts = {
            title,
            description,
            price,
            stock,
            code,
            image,
        };

        // Validación: Verifica que no haya campos undefined en el nuevo producto.
        if (!Object.values(nuevosProducts).includes(undefined)) {
            // Incrementa el ID estático y agrega el nuevo producto a la lista.
            ProductManager.id++;
            this.products.push({
                ...nuevosProducts,
                id: ProductManager.id
            });
        } else {
            console.log("Todos los campos son requeridos.");
        }
    }

    // Método para obtener la lista completa de productos.
    getProducts() {
        return this.products;
    }

    // Método para buscar un producto por su ID.
    productFound(id) {
        return this.products.find((product) => product.id === id);
    }

    // Método para obtener un producto por su ID con validación.
    getProductosById(id) {
        const product = this.productFound(id);
        // Validación: Si el producto no se encuentra, muestra un mensaje.
        if (!product) {
            console.log("No se encuentra el producto");
        } else {
            return product;
        }
    }
}

// Crear una instancia de la clase ProductManager.
const productos = new ProductManager();

// Agregar productos de ejemplo.
productos.addProducts('SLP Bicicleta SLP MTB 10Pro R29', 'Su ligero cuadro de aluminio, frenos a disco y equipamiento Shimano ofrecen un rendimiento excepcional. Prepárate para conquistar nuevos desafíos y disfrutar de una experiencia de conducción sin igual.', 245789, 5, "acb4532", "image1");

productos.addProducts('TopMega Bicicleta MTB Totem Talle M R29 21 v', 'Bicicleta Mountain Bike TOTEM; rodado 29 con 21 velocidades; suspensión delantera; frenos a disco; cuadro de Aluminio, cambios Shimano Con un diseño versátil y audaz, buscamos ser un recurso eficiente para todos aquellos que nos eligen. Apuntamos al desarrollo con la mayor durabilidad, accesibilidad y seguridad existente en el mercado actual.', 245789, 5, "acb4533", "image2");

productos.addProducts('SLP Bicicleta Mountain Bike SLP 5PRO Rodado 29" Talle 20', 'Desafiá tus capacidades Las mountain bikes, o bicicletas de montaña son el medio de transporte perfecto para tus aventuras y alcanzar aquellos lugares recónditos que querés conocer. Sus materiales y diseños están pensados para la acción, son resistentes y cuentan con mejor maniobrabilidad que otros modelos brindándote mayor tracción. Además, sus llantas con dibujos marcados favorecen el agarre en terrenos difíciles.', 234611, 5, "acb4534", "image3");

productos.addProducts('Peretti Bicicleta Peretti Cross Rodado 20 Verde', '¡Descubre la bicicleta perfecta para los pequeños aventureros con la PERETTI CROSS VARÓN! Diseñada pensando en la diversión y seguridad, esta bicicleta para niños es una opción única y emocionante para sus primeras pedaleadas.', 129437, 5, "acb4535", "image4");

productos.addProducts('Bicicleta Mountain Bike Rodado 29 Randers Resistente Talle L', 'Bicicleta Mountain Bike Randers rodado 29 con 21 velocidades y cuadro de aluminio.Diseñada para acompañarte en tu camino, resistente y funcional, se adapta a tus recorridos por la ciudad como a cualquier sendero haciendo tu experiencia más segura y confortable.Cuenta con horquilla con suspensión Neco H115, regulación y bloque de taza, cambios SHIMANO TZ30, llantas con doble pared de aluminio y mazas con quick release.', 209999, 5, "acb4536", "image5");

productos.addProducts('Bicicleta Cross Mecano 81 Rojo Rodado 20', 'La bicicleta Cross Mecano 81 en color rojo con rodado 20 es una opción robusta y versátil diseñada para el terreno todoterreno. Con su llamativo color rojo, esta bicicleta no solo es funcional sino también estéticamente atractiva. El rodado de 20 pulgadas proporciona un equilibrio adecuado entre agilidad y estabilidad, lo que la hace adecuada para diversas actividades, desde paseos urbanos hasta aventuras off-road.', 129148, 5, "acb4537", "image6");

// Mostrar la lista completa de productos y un producto específico por ID.
console.log(productos.getProducts());
console.log(productos.getProductosById(2));