;(function() {
  'use strict';

  const filters = {
    product: false,
    status: false
  }

  View.updateCounterNewOrders(document.body)

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

  const links = document.querySelectorAll('[data-filter-status] > a')
  document.querySelectorAll('[data-filter-status] > a')
          .forEach(element => element.addEventListener('click', function(event) {
            event.preventDefault()

            switch(this.textContent) {
              case "Новые":
                  filters.status = "Новый"
                  toggleClassLink(links, 'active', "Новые")
                  break

              case "В работе":
                  filters.status = "В работе"
                  toggleClassLink(links, 'active', "В работе")
                  break

              case "Завершенные":
                  filters.status = "Завершен"
                  toggleClassLink(links, 'active', "Завершенные")
                  break

              case "Архив":
                  filters.status = "Архивный"
                  toggleClassLink(links, 'active', "Архив")
                  break

              default:
                filters.status = false
                toggleClassLink(links, 'active', "Все вместе")
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

  //изменяем классы ссылок на боковой панели
  function toggleClassLink(arr, className, sample){
    for(let item of arr){
      item.classList.remove(className)
      if(item.textContent === sample && item.parentElement.tagName === 'LI') {
        item.classList.add(className)
      }
    }
  }
})();
