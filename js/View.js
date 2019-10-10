;(function(){
  'use strict'

  const View = {}

  View.generateTable = function generateTable(orders){
    const tableHTML = stringToHtml(tableTemplate)

    for(const order of orders){
      const trElement = document.createElement('tr')
      trElement.innerHTML = trTemplate.replace('%ID%', order.id)

      trElement.querySelector('[data-id]').textContent = order.id
      trElement.querySelector('[data-date]').textContent = order.data
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
<th scope="row" data-id>1</th>
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