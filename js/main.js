const orders = Model.getOrders()
const table = View.generateTable(orders)

document.querySelector('[data-tableplace]').append(table)

// console.table(orders)