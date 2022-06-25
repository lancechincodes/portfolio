/*--------------CONSTANT VALUES--------------*/


/*--------------STATE VALUES--------------*/


/*--------------CACHED ELEMENT REFERENCES--------------*/
// Navigation buttons
const navIconsDiv = document.querySelector('#nav-icons-div')
const navWordsDiv = document.querySelector('#nav-words-div')
const aboutButton = document.querySelector('#about-button')
const resumeButton = document.querySelector('#resume-button')
const projectsButton = document.querySelector('#projects-button')
const interestsButton = document.querySelector('#interests-button')

// Resume buttons
const resumeGrid = document.querySelector('#resume-grid')
const educationModal = document.querySelector('#education-modal')
const skillsModal = document.querySelector('#skills-modal')
const workExperienceModal = document.querySelector('#work-experience-modal')
const certificationsModal = document.querySelector('#certifications-modal')
const leadershipModal = document.querySelector('#leadership-modal')
const honorsAndAwardsModal = document.querySelector('#honors-and-awards-modal')
const modalCloseButton = document.querySelectorAll('.modal-close-button')

/*--------------FUNCTIONS--------------*/
// Navaigation functions
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

// Resume functions
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
        educationModal.style.display = 'block'
        resumeGrid.style.opacity = .5 // semi-transparent
    } 
    else if (e.target.getAttribute('id') === 'skills') {
        skillsModal.style.display = 'block'
        resumeGrid.style.opacity = .5 // semi-transparent
    }
    else if (e.target.getAttribute('id') === 'work-experience') {
        workExperienceModal.style.display = 'block'
        resumeGrid.style.opacity = .5 // semi-transparent
    }
    else if (e.target.getAttribute('id') === 'certifications') {
        certificationsModal.style.display = 'block'
        resumeGrid.style.opacity = .5 // semi-transparent
    }
    else if (e.target.getAttribute('id') === 'leadership') {
        leadershipModal.style.display = 'block'
        resumeGrid.style.opacity = .5 // semi-transparent
    }
    else if (e.target.getAttribute('id') === 'honors-and-awards') {
        honorsAndAwardsModal.style.display = 'block'
        resumeGrid.style.opacity = .5 // semi-transparent
    }
}
const closeModal = function() {
    // Hide all modals
    educationModal.style.display = 'none'
    skillsModal.style.display = 'none'
    workExperienceModal.style.display = 'none'
    certificationsModal.style.display = 'none'
    leadershipModal.style.display = 'none'
    honorsAndAwardsModal.style.display = 'none'
    resumeGrid.style.opacity = 1 // fully opaque
}

/*--------------EVENT LISTENERS--------------*/
// Navigation event listeners
navIconsDiv.addEventListener('mouseover', onMouseOverNavIcons)
navIconsDiv.addEventListener('mouseout', onMouseOutNavIcons)
navWordsDiv.addEventListener('mouseover', onMouseOverNavWords)
navWordsDiv.addEventListener('mouseout', onMouseOutNavWords)

// Resume event listeners
resumeGrid.addEventListener('mouseover', onMouseOverResume)
resumeGrid.addEventListener('mouseout', onMouseOutResume)
resumeGrid.addEventListener('click', onClickResume)

// add event listeners to ALL modal buttons
for (let i = 0; i < modalCloseButton.length; i++) {
    modalCloseButton[i].addEventListener('click', closeModal)
}


