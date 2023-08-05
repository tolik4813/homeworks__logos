// Task 2
const shoppingCart = {
    items: [],

    addItem: function (item) {
        // Додати товар до кошику
        this.items.push(item);
    },

    removeItem: function (itemId) {
        // Видалити товар з кошику за ID
        this.items = this.items.filter((item) => item.id !== itemId);
    },

    getTotal: function () {
        // Отримати загальну вартість всіх товарів у кошику
        const total = this.items.reduce((accumulator, item) => {
            return accumulator + item.price;
        }, 0);

        return total.toFixed(2);
    },

    checkout: function () {
        // Оформити замовлення та очистити кошик
        // Наприклад, надіслати запит на сервер з даними замовлення
        // та повернути Promise з результатом операції
        return new Promise((resolve, reject) => {
            // Реалізація операції оформлення замовлення
            // Якщо операція успішна, повернути resolve()
            // Якщо операція не вдалася, повернути reject()
        }).finally(() => {
            this.items = []; // Очистити кошик
        });
    }
};

export default shoppingCart;