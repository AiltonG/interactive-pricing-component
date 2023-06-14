const qview = document.querySelector("#valueview")
const qmonth = document.querySelector("#valuemonth")

const range = document.querySelector("#item3")
const choose = document.querySelector(".chex")

var view = ["10k","50k","100k","500k","1M"]
var month = [8,12,16,24,36]

var discount = true
function checar(){
    if(discount == true){
        discount = false
        month = [6,9,12,18,27]
    }else{
        discount = true
        month = [8,12,16,24,36]
    }
    qmonth.textContent = month[range.value]
    qview.textContent = view[range.value]
}

range.addEventListener("input", (event) => {
    qview.textContent = view[event.target.value]
    qmonth.textContent = month[range.value]
    qview.textContent = view[range.value]
})

/*
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/