const id = getId()
const order = Model.getOrderBuId(id)
const card = View.generateCard(order)

document.querySelector('#card').append(card)

//прослушиваем кнопки
// const buttons = divElement.querySelectorAll('a.btn')

function getId (){
  if(location.search.includes('?') && location.search.includes('id=')) {
    const array = location.search.slice(1).split('=')
    const index = array.indexOf('id')

    return parseInt(array[index + 1])
  }
}