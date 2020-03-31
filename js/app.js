const tour = document.getElementById('tour');
let floatingDiv;

tour.addEventListener('click', (e) => {
    e.preventDefault();
    // Create floating div
    if(!floatingDiv) {
        floatingDiv = document.createElement('div');
        floatingDiv.setAttribute('id', 'floating-div');
        floatingDiv.style.display = 'flex';
        floatingDiv.style.top = `${window.pageYOffset + 90}px`;
        const floatingForm = '<form action="" class="bg-light" id="floating-form"><div class="row"><div class="col"><button type="button" class="close" id="close-form" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></div><div class="row"><div class="col"><input type="text" placeholder="First Name"></div><div class="col"><input type="text" placeholder="Last Name"></div></div><div class="row"><div class="col"><input type="text" placeholder="Email"></div><div class="col"><input type="text" placeholder="Phone"></div></div><div class="row"><div class="col"><label for="message">Message</label><br><textarea rows="3"></textarea> <br></div></div><input type="submit" value="Submit" id="submit-tour" class="btn btn-primary"></form>'
        floatingDiv.innerHTML = floatingForm;
        document.body.appendChild(floatingDiv);   
    } 

    //close button
    const closeForm = document.getElementById('close-form');
    if(floatingDiv.style.display = 'flex'){
        closeForm.addEventListener('click', removeFloatingDiv)
    } 

    //Remove floatingDiv function
    function removeFloatingDiv() {
        floatingDiv.style.display = 'none';
    }

});

// Keep form at the top of viewport 
const floatForm = document.getElementById('floating-form');
window.addEventListener('scroll', () => {
    if(floatingDiv) {
        floatingDiv.style.top = `${window.pageYOffset + 90}px`;
    }
});



