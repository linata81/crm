;(function(){
  'use strict'

  const database = {
    idCounter: 7,
    orders: [
      {
        id: 1,
        data: Date.now(),
        product: "Курс по верстке",
        name: "Юрий Васильев",
        email: "info@rightblog.ru",
        phone: "+7 (909) 77-55-777",
        status: "Новый"
      },
      {
        id: 2,
        data: Date.now(),
        product: "Курс по JavaScript",
        name: "Иван Грозный",
        email: "info@blabla.ru",
        phone: "+7 (909) 55-55-555",
        status: "В работе"
      },
      {
        id: 3,
        data: Date.now(),
        product: "Курс по верстке",
        name: "Юрий Васильев",
        email: "info@rightblog.ru",
        phone: "+7 (909) 77-55-777",
        status: "Завершен"
      },
      {
        id: 4,
        data: Date.now(),
        product: "Курс по VUE JS",
        name: "Ирина Понарошку",
        email: "info@gmail.ru",
        phone: "+7 (909) 11-11-111",
        status: "Новый"
      },
      {
        id: 5,
        data: Date.now(),
        product: "Курс по PHP",
        name: "Василий Булкин",
        email: "info@yandex.ru",
        phone: "+7 (909) 22-22-222",
        status: "Новый"
      },
      {
        id: 6,
        data: Date.now(),
        product: "Курс по WordPress",
        name: "Василий Булкин",
        email: "info@yandex.ru",
        phone: "+7 (909) 22-22-229",
        status: "Завершен"
      }
    ]
  }

  save()
  load()

  const Model = {}

  //возвращает БД
  Model.getOrders = function getOrders(){
    return JSON.parse(JSON.stringify(database.orders))
  }

  //возвращает ордер по id
  Model.getOrderBuId = function getOrderBuId(id){
    return JSON.parse(JSON.stringify(database.orders[id-1]))
  }

  //Изменяет ордер по id
  Model.setOrderBuId = function setOrderBuId(order) {
    database.orders[id-1] = JSON.parse(JSON.stringify(order))
    save()
  }

  window.Model = Model

  function save() {
    localStorage.setItem('crm', JSON.stringify(database))
  }

  function load(){
    if(localStorage.getItem('crm')) {
      const data = JSON.parse(localStorage.getItem('crm'))
      Object.assign(database, data)
    }
  }

})();