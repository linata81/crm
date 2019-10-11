;(function() {
  'use strict';

  const id = getId()
  const order = Model.getOrderBuId(id)
  
  View.updateEditionCard(document.body, order)

  View.dispatch = (element, event) => {
    const updateData = View.getEditorData(document.body)
    // const result = Model.updateOrder(id, updateData)
    let result = null

    if(element.hasAttribute('data-button-save')) {
      result = Model.updateOrder(id, updateData)
    }
    else if(element.hasAttribute('data-button-archive')) {
      result = Model.getArchive(id)
    }

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