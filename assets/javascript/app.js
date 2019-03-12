//global variables
let clickCount = 0
let myMS = Math.floor(Math.random() * 100)
let compMS = Math.floor(Math.random() * 100)
let randomLosses1 = Math.floor(Math.random() * 100)
let randomGains1 = Math.floor(Math.random() * 100)
let randomLosses2 = Math.floor(Math.random() * 100)
let randomGains2 = Math.floor(Math.random() * 100)
let isDone = false

//functions
window.onload = _ => {
    document.querySelector('#select-company').style.display = 'none'
    document.querySelector('#left-player').style.display = 'none'
    document.querySelector('#right-player').style.display = 'none'
    document.querySelector('#score-count').style.display = 'none'
}

//show companies when selecting industry (onclick is in HTML)
const industryOne = _ => {
    document.querySelector('#select-company').style.display = 'block'
    document.querySelector('.ind-1-company').style.display = 'inline'
    document.querySelector('#message-prompt').innerHTML = '<h2>Select Your Company</h2>'
}

//when strategy button is clicked (onclick is in HTML)
const strategyButton = _ => {
    myMS = myMS + randomGains1 - randomLosses1
    compMS = compMS + randomGains2 - randomLosses2
    const checkScore = _ => {
        if (myMS < 0) {
        myMS = 0
        compMS = 100
        console.log("You Lose")
        document.querySelector('#message-prompt').innerHTML = `<h2>You made bad strategic choices and ran your company into the ground<br><a href="https://www.uscourts.gov/service-forms/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics">File for Bankruptcy</a></h2>`
        isDone = true
        }
        else if (myMS > 100) {
        myMS = 100
        compMS = 0
        console.log("You Win")
        document.querySelector('#message-prompt').innerHTML = "<h2>Congratulations! You Monopolized Your Industry!</h2>"
        isDone = true
        }
        else if (compMS < 0) {
        myMS = 100
        compMS = 0
        console.log("You Win")
        document.querySelector('#message-prompt').innerHTML = "<h2>Congratulations! You Monopolized Your Industry!</h2>"
        isDone = true
        }
        else if (compMS > 100) {
        myMS = 0
        compMS = 100
        console.log("You Lose")
        document.querySelector('#message-prompt').innerHTML = `<h2>Congratulations! You made bad strategic choices and ran your company into the ground<br><a href="https://www.uscourts.gov/service-forms/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics">File for Bankruptcy</a></h2>`
        isDone = true
        }    
    }
    checkScore()
    document.querySelector('#my-marketshare').innerHTML = myMS
    document.querySelector('#comp-marketshare').innerHTML = compMS
}

//function calls:
document.addEventListener('click', e => {
//scenario 1: if Google Chrome is chosen as your company
    if (e.target.className === 'ind-1-company') {
        e.target.style.display = 'none'
        clickCount++
        if (e.target.id === 'company1-1' && clickCount <= 1) {
            document.querySelector('#left-player').style.display = 'block'
            document.querySelector('#selected-company').innerHTML = '<img class="ind-1-company" id="company1-1" src="./assets/images/google-chrome-logo.png" alt="Google Chrome">'
            document.querySelector('#message-prompt').innerHTML = '<h2>Select Your Competitor</h2>'
        }
//scenario 2: if Firefox is chosen as your company
        else if (e.target.id === 'company1-2' && clickCount <= 1) {
            document.querySelector('#left-player').style.display = 'block'
            document.querySelector('#selected-company').innerHTML = '<img src="./assets/images/firefox-logo.png" alt="Firefox">'
            document.querySelector('#message-prompt').innerHTML = '<h2>Select Your Competitor</h2>'
        }

//scenario 3: if Safari is chosen as your company
        else if (e.target.id === 'company1-3' && clickCount <= 1) {
            document.querySelector('#left-player').style.display = 'block'
            document.querySelector('#selected-company').innerHTML = '<img src="./assets/images/safari-logo.png" alt="Safari">'
            document.querySelector('#message-prompt').innerHTML = '<h2>Select Your Competitor</h2>'
        }

//scenario 3: if IE is chosen as your company
        else if (e.target.id === 'company1-4' && clickCount <= 1) {
            document.querySelector('#left-player').style.display = 'block'
            document.querySelector('#selected-company').innerHTML = '<img src="./assets/images/internet-explorer-logo.png" alt="Safari">'
            document.querySelector('#message-prompt').innerHTML = '<h2>Select Your Competitor</h2>'
        }

//competitors scenarios
        else if (e.target.id === 'company1-1' && clickCount > 1) {
            document.querySelector('#right-player').style.display = "block"
            document.querySelector('#competitors').innerHTML = '<img class="ind-1-company" id="company1-2" src="./assets/images/google-chrome-logo.png" alt="Google Chrome">'
            document.querySelector('#score-count').style.display = 'block'
            document.querySelector('#message-prompt').innerHTML = '<h2>Start Your Growth Strategy!</h2>'
            document.querySelector('#companies').style.display = 'none'
        }
        else if (e.target.id === 'company1-2' && clickCount > 1) {
            document.querySelector('#right-player').style.display = "block"
            document.querySelector('#competitors').innerHTML = '<img class="ind-1-company" id="company1-2" src="./assets/images/firefox-logo.png" alt="Firefox">'
            document.querySelector('#score-count').style.display = 'block'
            document.querySelector('#message-prompt').innerHTML = '<h2>Start Your Growth Strategy!</h2>'
            document.querySelector('#companies').style.display = 'none'
        }
        else if (e.target.id === 'company1-3' && clickCount > 1) {
            document.querySelector('#right-player').style.display = "block"
            document.querySelector('#competitors').innerHTML = '<img class="ind-1-company" id="company1-3" src="./assets/images/safari-logo.png" alt="Safari">'
            document.querySelector('#score-count').style.display = 'block'
            document.querySelector('#message-prompt').innerHTML = '<h2>Start Your Growth Strategy!</h2>'
            document.querySelector('#companies').style.display = 'none'
        }
        else if (e.target.id === 'company1-4' && clickCount > 1) {
            document.querySelector('#right-player').style.display = "block"
            document.querySelector('#competitors').innerHTML = '<img class="ind-1-company" id="company1-4" src="./assets/images/internet-explorer-logo.png" alt="Internet Explorer">'
            document.querySelector('#score-count').style.display = 'block'
            document.querySelector('#message-prompt').innerHTML = '<h2>Start Your Growth Strategy!</h2>'
            document.querySelector('#companies').style.display = 'none'
        }
    }
})

document.querySelector('#my-marketshare').innerHTML = myMS
document.querySelector('#competitor-marketshare').innerHTML = compMS



//attempt #2
// //declare variables
// let clickCount = 0;
// let myMS = 50;
// let compMS = 50;
// let myRandomGains = Math.floor(Math.random() * 50)
// let myRandomLosses = Math.floor(Math.random() * 50)
// let compRandomGains = Math.floor(Math.random() * 50)
// let compRandomLosses = Math.floor(Math.random() * 50)

// //create functions
// const industryOne = _ => {
//     document.querySelector('#select-company').innerHTML = '<h2>Select Company</h2><br><img class="company" id="google-chrome" data-num="1" src="./assets/images/google-chrome-logo.png" alt="Google Chrome"><img class="company" id="firefox" data-num="2" src="./assets/images/firefox-logo.png" alt="Firefox"><img class="company" id="safari" data-num="3" src="./assets/images/safari-logo.png" alt="Safari"><img class="company" id="internet-explorer" data-num="4" src="./assets/images/internet-explorer-logo.png" alt="Internet Explorer">'
// }

// const checkScore = _ => {
//     if (myMS < 0) {
//     myMS = 0
//     console.log("You Lose")
//     }
//     if (myMS >= 100 || compMS <= 0) {
//     myMS = 100
//     console.log("You Win")
//     }
//     if (compMS < 0) {
//     compMS = 0
//     console.log("You Win")
//     }
//     if (compMS >= 100 || myMS <= 0) {
//     compMS = 100
//     console.log("You Lose")
//     }    
// }

// const attackButton = _ => {
//     myMS = myMS + myRandomGains - myRandomLosses
//     compMS = compMS + compRandomGains - compRandomLosses
// //not sure how to get gains and losses to update on the HTML with every button push
//     document.querySelector('#your-score-change').innerHTML = 'You gained ' + myRandomGains + "%" + ", but later lost " + myRandomLosses + "%" + " in market share"
//     document.querySelector('#competitor-score-change').innerHTML = 'Your competitor gained ' + compRandomGains + "%" + ", but later lost " + compRandomLosses + "%" + " in market share"
//     document.querySelector('#my-marketshare').innerHTML = myMS + "%"
//     document.querySelector('#competitor-marketshare').innerHTML = compMS + "%"
// }

// document.addEventListener('click', e => {
//     if (e.target.className = "company") {
//         e.target.style.display = 'none'
//         document.querySelector('#selected-company').innerHTML = e.target
//     }
// })

// document.querySelector('#my-marketshare').textContent = myMS + "%"
// document.querySelector('#competitor-marketshare').textContent = compMS + "%"


    //for reference:
    // <h2>Choose Your Company</h2><br>
    // <img class="company" id="google-chrome" data-num="1" src="./assets/images/google-chrome-logo.png" alt="Google Chrome">
    // <img class="company" id="firefox" data-num="2" src="./assets/images/firefox-logo.png" alt="Firefox">
    // <img class="company" id="safari" data-num="3" src="./assets/images/safari-logo.png" alt="Safari">
    // <img class="company" id="internet-explorer" data-num="4" src="./assets/images/internet-explorer-logo.png" alt="Internet Explorer">

//function calls

// document.addEventListener('click', e => {
//     if (e.target.className = "company") {
//         console.log("target clicked")
//         document.querySelector('#left-player').innerHTML = e.target
//     }
// })

// document.addEventListener('click', e => {
//     console.log(clickCount)
//     if (e.target.className === "company") {
//         e.target.style.display = 'none'
//         clickCount++
        
//     if (e.target.className === "company" && clickCount = 0) {
//     document.querySelector('#left-player').innerHTML = `<h2>Your Company</h2><br> + ${e.target}`
//         }

//         else if (e.target.className === "company" && clickCount > 0) {
//         console.log("hi")
//         document.querySelector('#right-player').innerHTML = '<h2>Your Competitor</h2>'
//         }
// }})








//attempt #1
// //declare variables
// let myStartingMS = 50
// let compStartingMS = 50

//     //industry 1 companies
//     let googleChrome = document.querySelector('#google-chrome')
//     let firefox = document.querySelector('#firefox')
//     let safari = document.querySelector('#safari')
//     let internetExplorer = document.querySelector('#internet-explorer')

// //make functions
// window.onload = () => {
//     // document.querySelectorAll('#player-selection', '#left-player', '#right-player', '#score-count').style.display = 'none';
//     document.getElementById('player-selection').style.display = 'none';
//     document.getElementById('left-player').style.display = 'none';
//     document.getElementById('right-player').style.display = 'none';
//     document.getElementById('score-count').style.display = 'none';
//     console.log("window onload")
// }
// const selectIndOne = () => {
//     document.getElementById('player-selection').style.display = 'block';
//     document.getElementById('select-company').innerHTML = "<h2>Select Your Company</h2>"
// }

// let selectGoogleChrome = () => {
//     console.log("google chrome")
//     document.getElementById('left-player').style.display = 'block';
//     document.getElementById('right-player').style.display = 'block';
//     document.getElementById('score-count').style.display = 'block';
//     document.getElementById('select-company').innerHTML = "<h2>Select Your Competition</h2>"
//     document.getElementById('google-chrome').style.display = 'none';
// }

// // let selectCompetitor = () => {
// //     console.log("select competitor")
// //     document.getElementById('right-player').style.display = 'block';
// // }
// //function calls
//     //industry buttons
// document.querySelector('#industry-1').addEventListener('click', selectIndOne)
// // document.querySelector('#industry-2').addEventListener('click', selectIndustry)
// // document.querySelector('#industry-3').addEventListener('click', selectIndustry)
// // document.querySelector('#industry-4').addEventListener('click', selectIndustry)
// // document.querySelector('#industry-5').addEventListener('click', selectIndustry)
//     //select player
// document.querySelector('#your-marketshare').append("Your market share: " + myStartingMS + "%")
// document.querySelector('#competitor-marketshare').append("Your competitor's market share: " + compStartingMS + "%")

// document.querySelector('#google-chrome').addEventListener('click', selectGoogleChrome)

