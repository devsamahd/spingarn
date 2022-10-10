let milisec = 0
let sec = 0
let min = 0
let recarr = []
let hisarr = []
let interval
const newri =document.getElementById("newrecinput")
const getDate = () => {
    const d = Date()
    return d
   }
const edey = localStorage.getItem("spingarnrecords")
if(edey != null || undefined){
    console.log("e dey")
}
else{

    const value = `Default-${Math.ceil(Math.random()*9)}`

    const dateandtime = getDate()
    const item = {
        category: value,
        iterations: [],
        date: dateandtime
       }
    const spingarnrecords = JSON.stringify([item])
    localStorage.setItem("spingarnrecords", spingarnrecords)
}


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

let truth
//getitemlocalstorage
const randomizer = () => {
    const rand = Math.floor(Math.random()*1000)
    return rand
}

//getitem
const gettheitem = () => {
    const value = localStorage.getItem("spingarnrecords")
    return value
}


//additeration
const additeration = (updatedcat) => {
   localStorage.setItem("spingarnrecords", updatedcat)
}




//updateview3
const updateWatch = (id) => {
    document.querySelector(".below").innerHTML = `
    <h2>Record history:</h2>
    <div class="record">
        <h3>${id}</h3>
    </div>
`

}

//get previous data for updatinng
const getspecificdata = (id) => {
    const gsd = JSON.parse(gettheitem())
    let fd
    let i
    fd = gsd.filter((data) => {
         return data.category == id
    })
    return fd[0]
}
console.log(getspecificdata("new-80"))


//get index for pop - fp means for pop, dfp means data for pop
const getindexfp = (id) => {
    const dfp = getspecificdata(id)
    const ok =dfp
    const jyl = JSON.parse(gettheitem())
    return jyl.findIndex(i => i.category == ok.category)
}

//update array with new value
const updatethearr = (id, newtime) =>{
    const prevdata = getspecificdata(id).iterations
    const newdata = [...prevdata, newtime]
    gettheitem()
}

console.log(getindexfp("new-829"))

//get data for iteration update
const updateIteration = () => {

}

//Add rec
const newrecord = () =>{
    console.log(randomizer())
    const value = `${newri.value}-${Number(randomizer())}`

    const dateandtime = getDate()
    const item = {
        category: value,
        iterations: [],
        date: dateandtime
       }
       const olditem = gettheitem()
       const newitem = [...JSON.parse(olditem), item]
    localStorage.setItem("spingarnrecords", JSON.stringify(newitem))
    console.log("created item")
    document.getElementById("reclist").innerHTML = ""
    reclist();
 
}


newri.addEventListener('keydown', (e)=>{
    if(e.key =='Enter'){
        newrecord()
    }
})

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
    // document.getElementById("time").innerHTML = `<span id="min">00</span>:<span id="sec">00</span>:<span id="milisec">00</span>`
    // localStorage.setItem("spingarnrecords", JSON.stringify(myarr))
    // let myItems = localStorage.getItem("spingarnrecords")
    // const res = JSON.parse(myItems)
    // console.log(res[0].id)
})

const reclist = () => {
    const data = JSON.parse(gettheitem())
    data.forEach(el => {
        const view = ` <div class="newrec-item" id=${el.category}>
        <div class="recnam" id=${el.category}>${el.category}</div>
        <div class="recdate" id=${el.category}>${el.date}</div>
    </div>`
    document.getElementById("reclist").innerHTML += view
    })
}
reclist()

const reclistclick = document.querySelector("#reclist")
reclistclick.addEventListener("click", (e)=> {
    const item = JSON.parse(gettheitem())
    const filtereddata = item.filter((key) => {
        return key.category === e.target.id
    })
    const exisitingdata = filtereddata.iterations
    const id = e.target.id
    
    updateWatch(id)
    
})