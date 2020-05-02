const tour = document.getElementById('tour')
let backdrop
let floatingDiv
let floatingForm

tour.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(!floatingDiv) {
        //Create form container
        floatingDiv = document.createElement('div')
        floatingDiv.setAttribute('id', 'floating-div')
        floatingDiv.style.display = 'block'

        //Create form
        floatingForm = document.createElement('form')
        floatingForm.innerHTML = '<div class="row"><div class="col"><button type="button" class="close" id="close-form" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></div><div class="row"><div class="col"><input type="text" placeholder="First Name"></div><div class="col"><input type="text" placeholder="Last Name"></div></div><div class="row"><div class="col"><input type="text" placeholder="Email"></div><div class="col"><input type="text" placeholder="Phone"></div></div><div class="row"><div class="col"><label for="message">Message</label><br><textarea rows="3"></textarea> <br></div></div><input type="submit" value="Submit" id="submit-tour" class="btn btn-primary">'
        floatingForm.setAttribute('id', 'floating-form')
        floatingForm.style.marginTop = `${window.pageYOffset + 100}px`

        //Create backdrop
        backdrop = document.createElement('div')
        backdrop.setAttribute('class', 'backdrop')

        //Add elements to UI
        floatingDiv.appendChild(floatingForm)
        document.body.insertAdjacentElement('afterbegin', floatingDiv)
        document.body.insertAdjacentElement('afterbegin', backdrop)
    } else {
        floatingDiv.style.display = 'block'
        backdrop.style.display = 'block'
    }

    //close button
    document.getElementById('close-form').addEventListener('click', () => {
        floatingDiv.style.display = 'none'
        backdrop.style.display = 'none'
    })

});

// Keep form at the top of viewport
window.addEventListener('scroll', () => {
    if(floatingDiv) {
        floatingForm.style.marginTop = `${window.pageYOffset + 100}px`
    }
});



