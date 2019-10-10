;(function() {
  'use strict';

  const View = {}

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
        <div class="col"> %DATE% </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2"><strong>Продукт:</strong></div>
        <div class="col">
          <select class="custom-select" id="inputGroupSelect01">
            <option value="course-html">Курс по верстке</option>
            <option value="course-js">Курс по JavaScript</option>
            <option value="course-vue">Курс по VUE JS</option>
            <option value="course-php">Курс по PHP</option>
            <option value="course-wordpress">Курс по WordPress</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2"><strong>Имя:</strong></div>
        <div class="col">
          <input type="text" class="form-control" value="%NAME%">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2"><strong>Email:</strong></div>
        <div class="col">
          <input type="text" class="form-control" value="%EMAIL%">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2"><strong>Телефон:</strong></div>
        <div class="col">
          <input type="text" class="form-control" value="%PHONE%">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-2">
          <strong>Статус заявки:</strong>
        </div>
        <div class="col">
          <select class="custom-select" id="inputGroupSelect02">
            <option value="1">Новый</option>
            <option value="2">В работе</option>
            <option value="3">Ожидается оплата</option>
            <option value="4">Завершен</option>
            <option value="5">Отказ</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  <div class="row justify-content-between">
    <div class="col">
      <a href="02-crm-all-bids.html" type="button" class="btn btn-primary">Сохранить изменения</a>
    </div>
    <div class="col text-right">
      <a href="02-crm-all-bids.html" type="button" class="btn btn-dark">Удалить в архив</a>
    </div>
  </div>
</form>`

})();