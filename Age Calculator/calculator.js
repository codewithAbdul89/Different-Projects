 
    let dob = document.getElementById("date")
let btn = document.getElementById("cal-btn")
let alertor = document.getElementById("alertor")
dob.max = new Date().toISOString().split("T")[0];
function calculateAge() {
    if (dob.value == "") {
        alertor.innerHTML = " ⚠️ Please enter your date of birth!"
        return
    }
    let birthdate = new Date(dob.value)
    y1 = birthdate.getFullYear()
    m1 = birthdate.getMonth() + 1;
    d1 = birthdate.getDate()


    let today = new Date()
    let y2 = today.getFullYear()
    m2 = today.getMonth() + 1;
    d2 = today.getDate()

    let y3, m3, d3;

    y3 = y2 - y1;
    if (m2 > m1) {
        m3 = m2 - m1
    }
    else {
        y3--
        m3 = 12 + m2 - m1
    }
    if (d2 > d1) {
        d3 = d2 - d1
    }
    else {
        m3--
        d3 = monthsintoyear(y1, m1) + d2 - d1
    }
    if (m3 < 0) {
        y3--
        m3 = 11
    }
    if (y3 <=0 || y3>100) {
        alertor.innerHTML = "You entered invalid date"
        return
    }
alertor.innerHTML = `Your age is <span style="color:black; font-weight: bold;"> ${y3}</span> years, <span style="color:black; font-weight: bold;"> ${m3}</span> months,<span style="color:black; font-weight: bold;"> ${d3}</span> days.`
    againer()
}
function monthsintoyear(year, month) {
    return new Date(year, month, 0).getDate()
}
btn.addEventListener("click", calculateAge)
dob.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        calculateAge()
        
    }
})
function againer(){
    btn.innerHTML="ReCalulate"
    btn.addEventListener("click",()=>{
        location.reload()
    })
}




 