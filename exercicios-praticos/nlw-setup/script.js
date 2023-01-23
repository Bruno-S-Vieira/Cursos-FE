const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header')

button.addEventListener('click', add)

function add() {
  alert('hello world')
}

// const data = {
//   run: ["01-01", "01-02", "01-06"],
//   water: ["01-03", "01-05", "01-07", "01-08"],
//   takePills: ["01-04"],
// }

// nlwSetup.setData(data)
// nlwSetup.load()