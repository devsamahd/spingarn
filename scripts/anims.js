const d =new Date()
document.querySelector(".footnote").innerHTML = `&copy; ${d.getFullYear()} 🖋️Samahd(most times Human, Other times robot)`
let i = 0
let show;
const runarr = () => {
const arr = ["Software Developer","Coder Extra-ordineer","Fullstack(MERN) Dev"]
    if(i<arr.length){
        show = arr[i]
        i++
    document.querySelector(".footnote").innerHTML = `&copy; ${d.getFullYear()} 🖋️Samahd(${show})`
       if(i>=3){
        i = 0
       }
    }
}
setInterval(runarr, 4000)

document.querySelector(".footnotepro").innerHTML = `&copy; ${d.getFullYear()} 🖋️Samahd(most times Human, Other times robot)`
let j = 0
let sshow;
const runarray = () => {
const array = ["Software Developer","Coder Extra-ordineer","Fullstack(MERN) Dev"]
    if(j<array.length){
        sshow = array[j]
        j++
    document.querySelector(".footnotepro").innerHTML = `&copy; ${d.getFullYear()} 🖋️Samahd(${sshow})`
       if(j>=3){
        j = 0
       }
    }
}
setInterval(runarray, 4000)