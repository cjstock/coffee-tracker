export function fetchCoffee(id = 0) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: id }), 500)
    })
}