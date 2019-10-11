;(function() {
  'use strict';

  const id = getId()
  const order = Model.getOrderBuId(id)
  
  View.updateEditionCard(document.body, order)

  View.dispatch = (element, event) => {
    const updateData = View.getEditorData(document.body)
    const result = Model.updateOrder(id, updateData)

    if(!result) {
      alert('Не получилось, попробуйте еще раз')
    }
    else {
      location.replace('02-crm-all-bids.html')
    }
  }
  
  //получение id заявки
  function getId (){
    if(location.search.includes('?') && location.search.includes('id=')) {
      const array = location.search.slice(1).split('=')
      const index = array.indexOf('id')
  
      return parseInt(array[index + 1])
    }
  }
})();




// const card = View.generateCard(order)
// document.querySelector('#card').append(card)



// //обработчик нажатия кнопок
// function clickhandler(element, event) {
//     event.preventDefault()

//     if(element.id ==='save') {
//       const obj = {
//         id: id,
//         date: card.querySelector('[data-date]').textContent,
//         product: card.querySelector('[data-product]').value,
//         name: card.querySelector('[data-name]').value,
//         email: card.querySelector('[data-email]').value,
//         phone: card.querySelector('[data-phone]').value,
//         status: card.querySelector('[data-status]').value
//       }

//       Model.setOrderBuId(obj)
//       alert('Изменения успешно сохранены!')
//       console.log(Model.getOrders());
//     }

//     else {
//       console.log('Нажата кнопка удалить в архив')
//     }
// }