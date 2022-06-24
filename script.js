/*--------------CONSTANT VALUES--------------*/


/*--------------STATE VALUES--------------*/


/*--------------CACHED ELEMENT REFERENCES--------------*/
const resumeGrid = document.querySelector('#resume-grid')
const educationalModal = document.querySelector('#educational-modal')
const modalCloseButton = document.querySelector('.modal-close-button')

/*--------------FUNCTIONS--------------*/
const onMouseOverResume = function(e) {
    if (e.target.getAttribute('class') !== 'rectangle')
    {
        e.target.classList.remove('hide-border')
    }
}

const onMouseOutResume = function(e) {
    if (e.target.getAttribute('class') !== 'rectangle')
    {
        e.target.classList.add('hide-border')
    }
}

const onClickResume = function(e) {
    if (e.target.getAttribute('id') === 'education') {
        educationalModal.style.display = 'block'
        resumeGrid.style.opacity = .5
    } 
}

const closeModal = function() {
    educationalModal.style.display = 'none'
    resumeGrid.style.opacity = 1
}

/*--------------EVENT LISTENERS--------------*/
resumeGrid.addEventListener('mouseover', onMouseOverResume)
resumeGrid.addEventListener('mouseout', onMouseOutResume)
resumeGrid.addEventListener('click', onClickResume)
modalCloseButton.addEventListener('click', closeModal)


