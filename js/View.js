;(function(){
  'use strict'

  const View = {
    dispatch(){}
  }

  const dateFormattor = new Intl.DateTimeFormat('ru')

  function dispatch(...args){
    View.dispatch(...args)
  }

  View.generateTable = function generateTable(orders){
    const tableHTML = stringToHtml(tableTemplate)

    for(const order of orders){
      const trElement = document.createElement('tr')
      trElement.innerHTML = trTemplate.replace(/%ID%/g, order.id)

      // trElement.querySelector('[data-id]').textContent = order.id
      trElement.querySelector('[data-date]').textContent = dateFormattor.format(order.date)
      trElement.querySelector('[data-product]').textContent = order.product
      trElement.querySelector('[data-name]').textContent = order.name
      trElement.querySelector('[data-email]').textContent = order.email
      trElement.querySelector('[data-phone]').textContent = order.phone

      const badge = trElement.querySelector('[data-status]')
      badge.textContent = order.status
 
      if(order.status === "В работе") {
        badge.classList.add('badge-warning')
      }
      else if(order.status === "Завершен") {
        badge.classList.add('badge-success')
      }
      else {
        badge.classList.add('badge-danger')
      }

      tableHTML.querySelector('tbody').append(trElement)
    }

    return tableHTML
  }

  //метод, который принимает структуру и данные, и по этим данным будет менять состояние DOM
  View.updateEditionCard = function updateEditionCard(dom, order){
    dom.querySelector('[data-id]').textContent = order.id
    dom.querySelector('[data-datetime]').textContent = dateFormattor.format(order.date)
    dom.querySelector('[data-product]').value = order.product
    dom.querySelector('[data-name]').value = order.name
    dom.querySelector('[data-email]').value = order.email
    dom.querySelector('[data-phone]').value = order.phone
    dom.querySelector('[data-status]').value = order.status

    dom.querySelector('[data-button-save]').addEventListener('click', function(event){
      event.preventDefault()
      dispatch(this, event)
    })

  }

  View.getEditorData = function getEditorData(dom){
    return {
      id: parseInt(dom.querySelector('[data-id]').textContent),
      product: dom.querySelector('[data-product]').value,
      name: dom.querySelector('[data-name]').value,
      email: dom.querySelector('[data-email]').value,
      phone: dom.querySelector('[data-phone]').value,
      status: dom.querySelector('[data-status]').value
    }
  }

  window.View = View

  function stringToHtml(string) {
    const divElement = document.createElement('div')
    divElement.innerHTML = string
    return divElement.firstElementChild
  }

  const tableTemplate = `
<table class="table fs-14">
  <thead>
    <tr>
      <th>ID</th>
      <th>дата</th>
      <th>продукт</th>
      <th>имя</th>
      <th>email</th>
      <th>телефон</th>
      <th>статус</th>
      <th></th>
    </tr>
  </thead>
  <tbody></tbody>
</table>`

  const trTemplate = `
<th scope="row" data-id>%ID%</th>
<td data-date>01.08.2019</td>
<td data-product>Курс по верстке</td>
<td data-name>Юрий</td>
<td data-email>info@rightblog.ru</td>
<td data-phone>+7 (909) 77-55-777 </td>
<td>
  <div class="badge badge-pill" data-status>Новый</div>
</td>
<td><a href="03-crm-edit-bid.html?id=%ID%" data-editbutton>Редактировать</a></td>
`

})();