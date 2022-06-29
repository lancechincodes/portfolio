/*--------------CONSTANT VALUES--------------*/

/*--------------STATE VALUES--------------*/
// Project state values
let currentProjectIndex = 0
let previousProjectIndex = 0

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

// Projects buttons
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
const project = document.querySelectorAll('.project')
const projectFooter = document.querySelectorAll('.project-footer')

// Interests hover elements
const interest = document.querySelectorAll('.interest')
const playingSportsDescription = document.querySelector('#playing-sports-description')
const watchingMoviesDescription = document.querySelector('#watching-movies-description')
const designingGraphicsDescription = document.querySelector('#designing-graphics-description')
const volunteeringDescription = document.querySelector('#volunteering-description')

/*--------------FUNCTIONS--------------*/
// Navaigation functions
// onMouseOverNavIcons replaces the main navigation icon with an alternative icon on hover
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
// onMouseOutNavIcons replaces the alternative icon back with the main navigation icon when mouse leaves icon
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
// onMouseOverNavWords makes non-selected navigation word icon semi-transparent
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
// onMouseOutNavWords makes all of the navigation words become fully opague when the mouse is not hovering on them
const onMouseOutNavWords = function(e) {
    aboutButton.style.opacity = 1
    resumeButton.style.opacity = 1
    projectsButton.style.opacity = 1
    interestsButton.style.opacity = 1
}

// Resume functions
// onMouseOverResume displays the hidden border around the subheadings by removing a hide class
const onMouseOverResume = function(e) {
    if (e.target.getAttribute('class') !== 'rectangle')
    {
        e.target.classList.remove('hide-border')
    }
}// onMouseOutResume removes the shown border around the subheadings by adding back a hide class
const onMouseOutResume = function(e) {
    if (e.target.getAttribute('class') !== 'rectangle')
    {
        e.target.classList.add('hide-border')
    }
}
// onClickResume opens the corresponding modal that is clicked and sets the resume grid to semi-transparent
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
// onCloseModal hides all modals and resets the resume grid to opaque
const closeModal = function() {
    educationModal.style.display = 'none'
    skillsModal.style.display = 'none'
    workExperienceModal.style.display = 'none'
    certificationsModal.style.display = 'none'
    leadershipModal.style.display = 'none'
    honorsAndAwardsModal.style.display = 'none'
    resumeGrid.style.opacity = 1 // fully opaque
}

// Projects functions
// onMouseOverPrevCarousel replaces the default previous arrow button with an alternative previous arrow button on hover
const onMouseOverPrevCarousel = function(e) {
    e.target.setAttribute('src', 'images/arrow-buttons/prev-button-alt.png')
}
// onMouseOverPrevCarousel replaces the alternative previous arrow button with the default previous arrow button on exit
const onMouseOutPrevCarousel = function(e) {
    e.target.setAttribute('src', 'images/arrow-buttons/prev-button.png')
}
// onMouseOverNextCarousel replaces the default next arrow button with an alternative next arrow button on hover
const onMouseOverNextCarousel = function(e) {
    e.target.setAttribute('src', 'images/arrow-buttons/next-button-alt.png')
}
// onMouseOverPrevCarousel replaces the alternative next arrow button with the default next arrow button on exit
const onMouseOutNextCarousel = function(e) {
    e.target.setAttribute('src', 'images/arrow-buttons/next-button.png')
}
// onClickPrevCarousel cycles to the previous project and if its a negative index, display the final index's project
const onClickPrevCarousel = function() {
    previousProjectIndex = currentProjectIndex
    currentProjectIndex--
    project[previousProjectIndex].style.display = 'none'
    if (currentProjectIndex < 0) {
        currentProjectIndex = project.length - 1
    }
    project[currentProjectIndex].style.display = 'block'
}
// onClickNextCarousel cycles to the next project and if its above the final index, display the first index's project
const onClickNextCarousel = function() {
    previousProjectIndex = currentProjectIndex
    currentProjectIndex++
    project[previousProjectIndex].style.display = 'none'
    if (currentProjectIndex >= project.length) {
        currentProjectIndex = 0
    }
    project[currentProjectIndex].style.display = 'block'
}
// onMouseOverProjectFooter displays a border around the "learn more" button on hover by adding a class
const onMouseOverProjectFooter = function() {
    for (let i = 0; i < projectFooter.length; i++) {
        projectFooter[i].classList.add('project-footer-hover-effect')
    }
}
// onMouseOverProjectFooter removes the border around the "learn more" button on hover by removing a class
const onMouseOutProjectFooter = function() {
    for (let i = 0; i < projectFooter.length; i++) {
        projectFooter[i].classList.remove('project-footer-hover-effect')
    }
}

// Interests functions
// onMouseOverInterest displays the interest description when either the interest circle or interest text is hovered on
const onMouseOverInterest = function(e) {
    if (e.target.getAttribute('id') === 'playing-sports' || e.target.getAttribute('id') === 'interest-text-playing-sports') {
        playingSportsDescription.classList.remove('hide-interest-description')
    }
    else if (e.target.getAttribute('id') === 'watching-movies' || e.target.getAttribute('id') === 'interest-text-watching-movies') {
        watchingMoviesDescription.classList.remove('hide-interest-description')
    }
    else if (e.target.getAttribute('id') === 'designing-graphics' || e.target.getAttribute('id') === 'interest-text-designing-graphics') {
        designingGraphicsDescription.classList.remove('hide-interest-description')
    }
    else if (e.target.getAttribute('id') === 'volunteering' || e.target.getAttribute('id') === 'interest-text-volunteering') {
        volunteeringDescription.classList.remove('hide-interest-description')
    }
}
//onMouseOutInterest hides all interest descriptions when mouse leaves the targets
const onMouseOutInterest = function(e) {
    playingSportsDescription.classList.add('hide-interest-description')
    watchingMoviesDescription.classList.add('hide-interest-description')
    designingGraphicsDescription.classList.add('hide-interest-description')
    volunteeringDescription.classList.add('hide-interest-description')
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
// Add event listeners to all modal buttons
for (let i = 0; i < modalCloseButton.length; i++) {
    modalCloseButton[i].addEventListener('click', closeModal)
}

// Projects event listeners 
prevButton.addEventListener('mouseover', onMouseOverPrevCarousel)
prevButton.addEventListener('mouseout', onMouseOutPrevCarousel)
nextButton.addEventListener('mouseover', onMouseOverNextCarousel)
nextButton.addEventListener('mouseout', onMouseOutNextCarousel)
prevButton.addEventListener('click', onClickPrevCarousel)
nextButton.addEventListener('click', onClickNextCarousel)
for (let i = 0; i < projectFooter.length; i++) {
    projectFooter[i].addEventListener('mouseover', onMouseOverProjectFooter)
    projectFooter[i].addEventListener('mouseout', onMouseOutProjectFooter)
}

// Interests event listeners 
for (let i = 0; i < interest.length; i++) {
    interest[i].addEventListener('mouseover', onMouseOverInterest)
    interest[i].addEventListener('mouseout', onMouseOutInterest)
}