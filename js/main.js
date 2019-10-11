;(function() {
  'use strict';

  const filters = {
    product: false,
    status: false
  }

  runFilter()
  
  document.querySelector('[data-filter-product]')
          .addEventListener('change', function(){
            /* if(!this.value) {                                   простая, но более длинная запись
              filters.product = false
            }
            else {
              filters.product = this.value
            } */

            // filters.product = this.value ? this.value : false        тернарный оператор

            filters.product = this.value || false                    /*еще более короткая запись*/
            runFilter()
          })
          
  document.querySelectorAll('[data-filter-status] > a')
          .forEach(element => element.addEventListener('click', function(event) {
            event.preventDefault()

            switch(this.textContent) {
              case "Новые":
                  filters.status = "Новый"
                  break

              case "В работе":
                  filters.status = "В работе"
                  break

              case "Завершенные":
                  filters.status = "Завершен"
                  break

              case "Архив":
                  filters.status = "Архивный"
                  break

              default:
                filters.status = false
            }
            runFilter()
          }))
  
  //запрашиваем данные из БД и сортируем их
  function runFilter(){
    let orders = Model.getOrders()

    if(filters.status !== 'Архивный') {
      const newOrders = []
      for(const order of orders) {
        if(order.status !== 'Архивный') {
          newOrders.push(order)
        }
      }
      orders = newOrders
    }
    
    if(filters.product) {
      const newOrders = []
      
      for(const order of orders) {
        if(order.product === filters.product) {
          newOrders.push(order)
        }
      }
      
      orders = newOrders
    }

    if(filters.status) {
      const newOrders = []
      
      for(const order of orders) {
        if(order.status === filters.status) {
          newOrders.push(order)
        }
      }
      
      orders = newOrders
    }
    
    const table = View.generateTable(orders)
    const tablePlace = document.querySelector('[data-tableplace]')

    tablePlace.innerHTML = ''
    tablePlace.append(table)
  }

})();
