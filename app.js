const span = document.querySelector('.conteiner__span');
const circle = document.querySelector('#base-timer-path-remaining')


const formatDate = (time) => time <= 9 ? time = `0${time}` : time


let d = 287
function calculateTimeFraction(count,startTime) {
    const w = (((count / startTime) * d)).toFixed(0)
    return (w - (1/count) * (1 - w))
   
  }

const getTaimer = (times) => {
    let startTime = times * 60
    if (times <= 99) {
        let count = 0
        const idInterval = setInterval(() => {
            let secund = formatDate(Math.floor((count % 60)));
            let minute = formatDate(Math.floor((count / 60)));
            span.textContent = `${minute} : ${secund}`
            count++
            const w = (((count / startTime) * d)).toFixed(0)
            document


            circle.setAttribute("stroke-dashoffset", w);
            if (minute == times) {
                
                clearInterval(idInterval)
                circle.classList.add('base-timer__path-remaining_activ')
            }
        }, 100)
    }
}

getTaimer(3)