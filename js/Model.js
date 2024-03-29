;(function(){
  'use strict'

  const database = {
    idCounter: 7,
    orders: [
      {
        id: 1,
        date: Date.now(), //посмотреть 12,10
        product: "Курс по верстке",
        name: "Юрий Васильев",
        email: "info@rightblog.ru",
        phone: "+7 (909) 77-55-777",
        status: "Новый"
      },
      {
        id: 2,
        date: Date.now() - 1000 * 60 * 60 * 24 * 2,
        product: "Курс по JavaScript",
        name: "Иван Грозный",
        email: "info@blabla.ru",
        phone: "+7 (909) 55-55-555",
        status: "В работе"
      },
      {
        id: 3,
        date: Date.now(),
        product: "Курс по верстке",
        name: "Юрий Васильев",
        email: "info@rightblog.ru",
        phone: "+7 (909) 77-55-777",
        status: "Завершен"
      },
      {
        id: 4,
        date: Date.now() - 1000 * 60 * 60 * 24 * 3,
        product: "Курс по VUE JS",
        name: "Ирина Понарошку",
        email: "info@gmail.ru",
        phone: "+7 (909) 11-11-111",
        status: "Новый"
      },
      {
        id: 5,
        date: Date.now() - 1000 * 60 * 60 * 24 * 2,
        product: "Курс по PHP",
        name: "Василий Булкин",
        email: "info@yandex.ru",
        phone: "+7 (909) 22-22-222",
        status: "Новый"
      },
      {
        id: 6,
        date: Date.now(),
        product: "Курс по WordPress",
        name: "Татьяна Савченко",
        email: "info@yandex.ru",
        phone: "+7 (909) 22-22-229",
        status: "Завершен"
      }
    ]
  }

  load()
  save()

  const Model = {}

  //возвращает БД
  Model.getOrders = function getOrders(){
    return JSON.parse(JSON.stringify(database.orders))
  }

  //возвращает ордер по id
  Model.getOrderBuId = function getOrderBuId(id){
    for(const item of database.orders) {
      if(item.id === id) {
        return JSON.parse(JSON.stringify(item))
      }
    }
  }

  //Изменяет ордер по id
  Model.updateOrder = function updateOrder(id, updateData) {
    for(const item of database.orders) {
      if(item.id === id) {
        item.product = updateData.product
        item.name = updateData.name
        item.email = updateData.email
        item.phone = updateData.phone
        item.status = updateData.status
        save()
        return true
      }
    }
    return false
  }

  //Изменяем статус ордера на архивный
  Model.getArchive = function getArchive(id){
    for(const item of database.orders) {
      if(item.id === id) {
        item.status = 'Архивный'
        save()
        return true
      }
    }
    return false
  }

  //добавляет заявку в БД

  Model.addOrder = function addOrder(order){
    database.orders.push({
      id: database.idCounter,
      date: new Date().getTime(),
      product: order.product,
      name: order.name,
      email: order.email,
      phone: order.phone,
      status: "Новый"
    })
    database.idCounter = database.idCounter + 1
    save()

  }

  window.Model = Model

  //сохраняет БД в localestorage
  function save() {
    localStorage.setItem('crm', JSON.stringify(database))
  }

  //возвращает БД из localestorage
  function load(){
    if(localStorage.getItem('crm')) {
      const data = JSON.parse(localStorage.getItem('crm'))
      Object.assign(database, data)
    }
  }

})();