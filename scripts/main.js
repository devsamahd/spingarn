let milisec = 0
let sec = 0
let min = 0
let hisarr = []
let interval



const increaseTime = () => {
    milisec++
    if(milisec<=9){
        document.getElementById('milisec').innerHTML = `0${milisec}`
    }
    else if(milisec>9 && milisec== 10 && sec<9){
        document.getElementById('milisec').innerHTML = `${milisec}`
        sec++
        document.getElementById('sec').innerHTML = `0${sec}`
        milisec = 0
    }
    else if(10<=sec<=59 && sec<=58){
        sec++
        document.getElementById('sec').innerHTML = `${sec}`
        milisec = 0
    }
    else if(sec>=59 && min<9){
        min++
        sec = 0
        milisec = 0
        document.getElementById('min').innerHTML = `0${min}`
    }
    else if(min>=9){
        min++
        sec = 0
        milisec = 0
        document.getElementById('min').innerHTML = `${min}`
    }  
}

//pause
const currentTime = () => {
    clearInterval(interval)
    if(sec<=9){
    document.getElementById("time").innerHTML = `<span id="min">0${min}</span>:<span id="sec">0${sec}</span>:<span id="milisec">0${milisec}</span>`
    }else{
    document.getElementById("time").innerHTML = `<span id="min">0${min}</span>:<span id="sec">${sec}</span>:<span id="milisec">0${milisec}</span>`
    }
}



const play = document.getElementById("play")

const pause = document.getElementById("pause")
play.addEventListener('click',()=>{
    clearInterval(interval)
    interval = setInterval(increaseTime,100);
})
pause.addEventListener('click',currentTime)

const stop = document.getElementById("stop")
stop.addEventListener('click', ()=>{
    const cur = document.getElementById("time").innerText
    console.log(cur)
    min= 0
    sec = 0
    milisec = 0
    clearInterval(interval)
    const myarr = [{
        id: 1,
        category: "running"
    }]
    document.getElementById("time").innerHTML = `<span id="min">00</span>:<span id="sec">00</span>:<span id="milisec">00</span>`
    localStorage.setItem("spingarnrecords", JSON.stringify(myarr))
    let myItems = localStorage.getItem("spingarnrecords")
    const res = JSON.parse(myItems)
    console.log(res[0].id)
})
