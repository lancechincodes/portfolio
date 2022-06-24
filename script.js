/*--------------CONSTANT VALUES--------------*/


/*--------------STATE VALUES--------------*/


/*--------------CACHED ELEMENT REFERENCES--------------*/
const navIconsDiv = document.querySelector('#nav-icons-div')
const navWordsDiv = document.querySelector('#nav-words-div')

const aboutButton = document.querySelector('#about-button')
const resumeButton = document.querySelector('#resume-button')
const projectsButton = document.querySelector('#projects-button')
const interestsButton = document.querySelector('#interests-button')

const resumeGrid = document.querySelector('#resume-grid')
const educationalModal = document.querySelector('#educational-modal')
const modalCloseButton = document.querySelector('.modal-close-button')

/*--------------FUNCTIONS--------------*/
const onMouseOverNavIcons = function(e) {
    if (e.target.getAttribute('id') === 'home-button') {
        e.target.setAttribute('src', 'images/logos/lc-logo-alt.png')
    }
    else if (e.target.getAttribute('id') === 'github-button') {
        e.target.setAttribute('src', 'images/logos/github-logo-alt.png')
    }
    else if (e.target.getAttribute('id') === 'linkedin-button') {
        e.target.setAttribute('src', 'images/logos/linkedin-logo-alt.png')
    }
}

const onMouseOutNavIcons = function(e) {
    if (e.target.getAttribute('id') === 'home-button') {
        e.target.setAttribute('src', 'images/logos/lc-logo.png')
    }
    else if (e.target.getAttribute('id') === 'github-button') {
        e.target.setAttribute('src', 'images/logos/github-logo.png')
    }
    else if (e.target.getAttribute('id') === 'linkedin-button') {
        e.target.setAttribute('src', 'images/logos/linkedin-logo.png')
    }
}

const onMouseOverNavWords = function(e) {
    if (e.target.getAttribute('id') === 'about-button') {
        resumeButton.style.opacity = .5
        projectsButton.style.opacity = .5
        interestsButton.style.opacity = .5
    }
    else if (e.target.getAttribute('id') === 'resume-button') {
        aboutButton.style.opacity = .5
        projectsButton.style.opacity = .5
        interestsButton.style.opacity = .5
    } 
    else if (e.target.getAttribute('id') === 'projects-button') {
        aboutButton.style.opacity = .5
        resumeButton.style.opacity = .5
        interestsButton.style.opacity = .5
    }
    else if (e.target.getAttribute('id') === 'interests-button') {
        aboutButton.style.opacity = .5
        resumeButton.style.opacity = .5
        projectsButton.style.opacity = .5
    }
}

const onMouseOutNavWords = function(e) {
    aboutButton.style.opacity = 1
    resumeButton.style.opacity = 1
    projectsButton.style.opacity = 1
    interestsButton.style.opacity = 1
}

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
        resumeGrid.style.opacity = .5 // semi-transparent
    } 
}

const closeModal = function() {
    educationalModal.style.display = 'none'
    resumeGrid.style.opacity = 1 // fully opaque
}

/*--------------EVENT LISTENERS--------------*/
navIconsDiv.addEventListener('mouseover', onMouseOverNavIcons)
navIconsDiv.addEventListener('mouseout', onMouseOutNavIcons)

navWordsDiv.addEventListener('mouseover', onMouseOverNavWords)
navWordsDiv.addEventListener('mouseout', onMouseOutNavWords)

resumeGrid.addEventListener('mouseover', onMouseOverResume)
resumeGrid.addEventListener('mouseout', onMouseOutResume)
resumeGrid.addEventListener('click', onClickResume)
modalCloseButton.addEventListener('click', closeModal)


