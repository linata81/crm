const id = getId()
const order = Model.getOrderBuId(id)
const card = View.generateCard(order)

document.querySelector('#card').append(card)

//прослушиваем кнопки
// const buttons = document.querySelectorAll('a.btn')
// for(let btn of buttons) {
//   if(!btn.classList.contains('btn-link')) {
//     btn.addEventListener('click', function(event){
//       event.preventDefault()
//       if(btn.textContent === "Сохранить изменения") {
//         console.log('Нажата кнопка сохранить');
//       }
//       else if(btn.textContent === "Удалить в архив") {
//         console.log('Нажата кнопка удалить в архив');
//       }
//     })
//   }
// }


function getId (){
  if(location.search.includes('?') && location.search.includes('id=')) {
    const array = location.search.slice(1).split('=')
    const index = array.indexOf('id')

    return parseInt(array[index + 1])
  }
}