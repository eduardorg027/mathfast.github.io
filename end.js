
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 1000

finalScore.innerHTML = localStorage.getItem('contadorb')

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
    
})

saveHighScore = e =>{
    e.preventDefault()

    const score = {
        score: localStorage.getItem('contadorb'),
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b)=>{
        return b.score - a.score
    })

    highScores.splice(1000)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('start.html')
}
