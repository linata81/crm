;(function() {
  'use strict';

  const View = {}

  //генерируем заявку
  View.generateCard = function generateCard(order) {
    const divElement = document.createElement('div')

    divElement.innerHTML = cardBodyTemplate.replace('%ID%', order.id)
                                           .replace('%DATE%',order.data )
                                           .replace('%NAME%', order.name)
                                           .replace('%EMAIL%', order.email)
                                           .replace('%PHONE%', order.phone)

    const selectProduct = divElement.querySelector('#inputGroupSelect01')
    const optionsProduct = selectProduct.querySelectorAll('option')
    for(const item of optionsProduct) {
      if(item.textContent === order.product) {
        item.setAttribute('selected', true)
      }
    }
    const selectStatus = divElement.querySelector('#inputGroupSelect02')
    const optionsStatus = selectStatus.querySelectorAll('option')
    for(const item of optionsStatus) {
      if(item.textContent === order.status) {
        item.setAttribute('selected', true)
      }
    }

    //прослушиваем кнопки
    const buttons = divElement.querySelectorAll('a.btn')

    for(const btn of buttons){
      btn.addEventListener('click', function(event){
        clickhandler(this, event)
      })
    }

    return divElement.firstElementChild
  }

  window.View = View

  const cardBodyTemplate = `
<form action="">
  <div class="card mb-4">
    <div class="card-header">Данные о заявке</div>
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-md-2"><strong>ID:</strong></div>
        <div class="col"> Заявка №%ID% </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2"><strong>Дата создания:</strong></div>
        <div class="col" data-date> %DATE% </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2"><strong>Продукт:</strong></div>
        <div class="col">
          <select class="custom-select" id="inputGroupSelect01" data-product>
            <option value="Курс по верстке">Курс по верстке</option>
            <option value="Курс по JavaScript">Курс по JavaScript</option>
            <option value="Курс по VUE JS">Курс по VUE JS</option>
            <option value="Курс по PHP">Курс по PHP</option>
            <option value="Курс по WordPress">Курс по WordPress</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2"><strong>Имя:</strong></div>
        <div class="col">
          <input type="text" class="form-control" data-name value="%NAME%">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2"><strong>Email:</strong></div>
        <div class="col">
          <input type="text" class="form-control" data-email value="%EMAIL%">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2"><strong>Телефон:</strong></div>
        <div class="col">
          <input type="text" class="form-control" data-phone value="%PHONE%">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2">
          <strong>Статус заявки:</strong>
        </div>
        <div class="col">
          <select class="custom-select" id="inputGroupSelect02" data-status>
            <option value="Новый">Новый</option>
            <option value="В работе">В работе</option>
            <option value="Ожидается оплата">Ожидается оплата</option>
            <option value="Завершен">Завершен</option>
            <option value="Отказ">Отказ</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  <div class="row justify-content-between">
    <div class="col">
      <a href="02-crm-all-bids.html" type="button" class="btn btn-primary" id='save'>Сохранить изменения</a>
    </div>
    <div class="col text-right">
      <a href="02-crm-all-bids.html" type="button" class="btn btn-dark" id='archive'>Удалить в архив</a>
    </div>
  </div>
</form>`

})();