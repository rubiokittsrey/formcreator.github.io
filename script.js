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
        case 'checkbox': appendCheckbox(label)
            break
    }

}

const appendText = (label = "No label") => {
    let container = document.createElement('div')
        let contId = label + 'ContainertypeText'
            contId = contId.replace(/\s/g, "")
    let element = document.createElement('input')
    let removeButton = document.createElement('button')
    
    container.setAttribute('id', contId)
    container.setAttribute('class', 'container')

    element.setAttribute('id', label)
    element.setAttribute('type', 'text')
    element.setAttribute('class', 'w-75 form-control mt-2 d-inline')
    element.setAttribute('placeholder', label)

    removeButton.setAttribute('type', 'button')
    removeButton.setAttribute('class', 'btn btn-primary mt-2 d-inline')
    removeButton.textContent = 'X'
    removeButton.style = 'background-color:red; border:1px solid red; margin-left:5px'
    removeButton.addEventListener('click', (event) => {
        removeElement(event, contId);
      })
    
    if (!document.getElementById(contId)) {
    document.querySelector('#display').append(container)
        document.querySelector('#' + contId).append(element)
        document.querySelector('#' + contId).append(removeButton)
    }
}

const appendButton = (label) => {
    let container = document.createElement('div')
        let contId = label + 'ContainertypeButton'
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
    removeButton.addEventListener('click', (event) => {
        removeElement(event, contId);
      })

    if (!document.getElementById(contId)) {
        document.querySelector('#display').append(container)
            document.querySelector('#' + contId).append(element)
            document.querySelector('#' + contId).append(removeButton)
        }
}

const appendRadio = (label) => {
    const arr = label.split(',')
    let container = document.createElement('div')
        let contId = arr[0] + 'ContainertypeRadio'
            contId = contId.replace(/\s/g, "")
    let radioCont = document.createElement('div')
        let radioContId =  arr[1] + 'radioCont'
            radioContId = radioContId.replace(/\s/g, "")
    let element = document.createElement('input')
    let radioLabel = document.createElement('label')
    let removeButton = document.createElement('button')

    container.setAttribute('id', contId)
    container.setAttribute('class', 'container')
    
    radioCont.setAttribute('id', radioContId)
    radioCont.setAttribute('class', 'container d-inline')
    
    element.setAttribute('id', arr[1])
    element.setAttribute('type', 'radio')
    element.setAttribute('name', arr[0])
    element.setAttribute('class', 'btn btn-primary mt-2')
    element.style = "margin-right:5px"
    element.textContent = label

    radioLabel.setAttribute('for', arr[1])
    radioLabel.setAttribute('name', arr[0])
    radioLabel.innerHTML = arr[1]

    let removeButtonId =  arr[0]+'rB'
    removeButton.setAttribute('type', 'button')
    removeButton.setAttribute('id', removeButtonId)
    removeButton.setAttribute('class', 'btn btn-primary mt-2')
    removeButton.textContent = 'X'
    removeButton.style = 'background-color:red; border:1px solid red; margin-left:5px'
    removeButton.addEventListener('click', (event) => {
        removeElement(event, contId);
      })

    
        if (!document.getElementById(contId)) {
            if (!document.getElementById(radioContId)) {
                document.querySelector('#display').append(container)
                document.querySelector('#' + contId).append(radioCont)
                    document.querySelector('#' + radioContId).append(element)
                    document.querySelector('#' + radioContId).append(radioLabel)
                document.querySelector('#' + contId).append(removeButton)
                }
        } else {
            let x = document.getElementById(removeButtonId)
            
            if (!document.getElementById(radioContId)) {
                x.remove()
                document.querySelector('#' + contId).append(radioCont)
                document.querySelector('#' + radioContId).append(element)
                document.querySelector('#' + radioContId).append(radioLabel)
            document.querySelector('#' + contId).append(removeButton)
            }
        }
        
}

const appendCheckbox = (label) => {
    const arr = label.split(',')
    let container = document.createElement('div')
        let contId = arr[0] + 'ContainertypeCont'
            contId = contId.replace(/\s/g, "")
    let checkCont = document.createElement('div')
        let checkContId =  arr[1] + 'checkCont'
            checkContId = checkContId.replace(/\s/g, "")
    let element = document.createElement('input')
    let checkLabel = document.createElement('label')
    let removeButton = document.createElement('button')

    container.setAttribute('id', contId)
    container.setAttribute('class', 'container')
    
    checkCont.setAttribute('id', checkContId)
    checkCont.setAttribute('class', 'container d-inline')
    
    element.setAttribute('id', arr[1])
    element.setAttribute('type', 'checkbox')
    element.setAttribute('name', arr[0])
    element.setAttribute('class', 'btn btn-primary mt-2')
    element.style = "margin-right:5px"
    element.textContent = label

    checkLabel.setAttribute('for', arr[1])
    checkLabel.setAttribute('name', arr[0])
    checkLabel.innerHTML = arr[1]

    let removeButtonId =  arr[0]+'rB'
    removeButton.setAttribute('type', 'button')
    removeButton.setAttribute('id', removeButtonId)
    removeButton.setAttribute('class', 'btn btn-primary mt-2')
    removeButton.textContent = 'X'
    removeButton.style = 'background-color:red; border:1px solid red; margin-left:5px'
    removeButton.addEventListener('click', (event) => {
        removeElement(event, contId);
      })

    
        if (!document.getElementById(contId)) {
            if (!document.getElementById(checkContId)) {
                document.querySelector('#display').append(container)
                document.querySelector('#' + contId).append(checkCont)
                    document.querySelector('#' + checkContId).append(element)
                    document.querySelector('#' + checkContId).append(checkLabel)
                document.querySelector('#' + contId).append(removeButton)
                }
        } else {
            let x = document.getElementById(removeButtonId)
            
            if (!document.getElementById(checkContId)) {
                x.remove()
                document.querySelector('#' + contId).append(checkCont)
                document.querySelector('#' + checkContId).append(element)
                document.querySelector('#' + checkContId).append(checkLabel)
            document.querySelector('#' + contId).append(removeButton)
            }
        }
        
}

const removeElement = (event, x) => {
    let id = document.getElementById(x)
    id.remove()
}