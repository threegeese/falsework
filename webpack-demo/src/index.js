let component = () => {
  let element = document.createElement('h1')
  element.innerHTML = 'Hello webpack'

  return element;
}

document.body.appendChild(component())