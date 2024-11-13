const btn = document.querySelector(".calculate");
const res = document.querySelector(".res");
const DOB = document.querySelector(".DOB");

btn.addEventListener("click", function(){
    const curr = new Date();
    const year = curr.getFullYear();
    const month = curr.getMonth();

    const dob = new Date(DOB.value); // dob is a string we have to convert it the value to get the fullyear and full month.
    const dobYear = dob.getFullYear();
    const dobMonth  = dob.getMonth();

    const ageYear = year - dobYear;
    const ageMonth = month - dobMonth;

    // if the birthday has not occured yet.
    
if (ageMonth < 0 ){
        ageYear--;
        ageMonth +=12;
    }

    res.textContent = `You are ${ageYear} years ${ageMonth} months old.`;
    
})
