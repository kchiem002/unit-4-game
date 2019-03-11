//declare variables
let clickCount = 0;
let myMS = 50;
let compMS = 50;
let myRandomGains = Math.floor(Math.random() * 50)
let myRandomLosses = Math.floor(Math.random() * 50)
let compRandomGains = Math.floor(Math.random() * 50)
let compRandomLosses = Math.floor(Math.random() * 50)

//create functions
const industryOne = _ => {
    document.querySelector('#select-company').innerHTML = '<h2>Select Company</h2><br><img class="company" id="google-chrome" data-num="1" src="./assets/images/google-chrome-logo.png" alt="Google Chrome"><img class="company" id="firefox" data-num="2" src="./assets/images/firefox-logo.png" alt="Firefox"><img class="company" id="safari" data-num="3" src="./assets/images/safari-logo.png" alt="Safari"><img class="company" id="internet-explorer" data-num="4" src="./assets/images/internet-explorer-logo.png" alt="Internet Explorer">'
}

const checkScore = _ => {
    if (myMS < 0) {
    myMS = 0
    console.log("You Lose")
    }
    if (myMS >= 100 || compMS <= 0) {
    myMS = 100
    console.log("You Win")
    }
    if (compMS < 0) {
    compMS = 0
    console.log("You Win")
    }
    if (compMS >= 100 || myMS <= 0) {
    compMS = 100
    console.log("You Lose")
    }    
}

const attackButton = _ => {
    myMS = myMS + myRandomGains - myRandomLosses
    compMS = compMS + compRandomGains - compRandomLosses
    myGains = myRandomGains + 0
    document.querySelector('#your-score-change').innerHTML = 'You gained ' + myRandomGains + "%" + ", but later lost " + myRandomLosses + "%" + " in market share"
    document.querySelector('#competitor-score-change').innerHTML = 'Your competitor gained ' + compRandomGains + "%" + ", but later lost " + compRandomLosses + "%" + " in market share"
    document.querySelector('#my-marketshare').innerHTML = myMS + "%"
    document.querySelector('#competitor-marketshare').innerHTML = compMS + "%"
}

document.addEventListener('click', e => {
    if (e.target.className = "company") {
        e.target.style.display = 'none'
        document.querySelector('#selected-company').innerHTML = e.target
    }
})


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

document.querySelector('#my-marketshare').textContent = myMS + "%"
document.querySelector('#competitor-marketshare').textContent = compMS + "%"






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

