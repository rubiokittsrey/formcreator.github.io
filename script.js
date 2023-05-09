const insert = () => {
    let type = document.querySelector('#type').value
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'radio': appendRadio(label)
            break
    }

}

const appendText = (label = "No label") => {
    let container = document.createElement('div')
        let contId = label + 'Container'
            contId = contId.replace(/\s/g, "")
    let element = document.createElement('input')
    let removeButton = document.createElement('button')
    
    container.setAttribute('id', contId)
    container.setAttribute('class', 'container')

    element.setAttribute('id', label)
    element.setAttribute('type', 'text')
    element.setAttribute('class', 'form-control mt-2')
    element.setAttribute('placeholder', label)

    removeButton.setAttribute('type', 'button')
    removeButton.setAttribute('class', 'btn btn-primary mt-2')
    removeButton.textContent = 'X'
    removeButton.style = 'background-color:red; border:1px solid red; margin-left:5px'
    removeButton.addEventListener('click', removeElement)

    document.querySelector('#display').append(container)
        document.querySelector('#' + contId).append(element)
        document.querySelector('#' + contId).append(removeButton)
}

const appendButton = (label) => {
    let container = document.createElement('div')
        let contId = label + 'Container'
            contId = contId.replace(/\s/g, "")
    let element = document.createElement('button')
    let removeButton = document.createElement('button')

    container.setAttribute('id', contId)
    container.setAttribute('class', 'container')
    
    element.setAttribute('id', label)
    element.setAttribute('type', 'button')
    element.setAttribute('class', 'btn btn-primary mt-2')
    element.textContent = label

    removeButton.setAttribute('type', 'button')
    removeButton.setAttribute('class', 'btn btn-primary mt-2')
    removeButton.textContent = 'X'
    removeButton.style = 'background-color:red; border:1px solid red; margin-left:5px'
    removeButton.addEventListener('click', removeElement.bind(contId))

    document.querySelector('#display').append(container)
        document.querySelector('#' + contId).append(element)
        document.querySelector('#' + contId).append(removeButton)
}

const removeElement = (contId) => {
    let id = document.getElementById(contId)
    id.remove()
}



/* const appendRadio = (label = "No label") => {
    var options = label.split(',')

    console.log(options)

    let el = document.createElement('input')
    let elLabel = document.createElement('label')
    let contain = document.createElement('div')
    let id = '#' + label

    contain.setAttribute('id', label)

    el.setAttribute('type', 'radio')
    el.setAttribute('class', 'mt-2 p-3')
    el.setAttribute('id', label)
    el.setAttribute('name', label)

    elLabel.setAttribute('for', label)
    elLabel.setAttribute('class', 'mt-2')
    elLabel.textContent = label

    document.querySelector('#display').append(contain)
    document.querySelector('#' + label).append(el)
    document.querySelector('#' + label).append(elLabel)
} */

