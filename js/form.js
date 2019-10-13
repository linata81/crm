;(function() {
  'use strict';

  const form = document.querySelector('[data-order]')
  const btn = form.querySelector('[type="submit"]')

  btn.addEventListener('click', function(event){
    event.preventDefault()

    const inputs = form.querySelectorAll('input, select')
    const newOrder = {}

    for(let input of inputs) {
      if(input.value) {
        switch(input.name) {
          case "name":
            newOrder.name = input.value
            break
          case "phone":
            newOrder.phone = input.value
            break
          case "email":
            newOrder.email = input.value
            break
          case "product":
            newOrder.product = input.value
            break
        }
      }
      else {
        alert('Заполните все поля формы')
      }

    }
    Model.addOrder(newOrder)
    form.reset()
    alert('Заявка успешно отправлена')
  })



})();
