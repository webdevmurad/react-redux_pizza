export const addPizzaToCart = (pizzaObg) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObg
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})