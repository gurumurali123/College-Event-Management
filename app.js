// registration-form.html
let fullName=document.getElementById("fullName");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let college=document.getElementById("college");
let yearSelect=document.getElementById("YearSelect");
let TeamMembers=document.getElementById("TeamMembers");

//admin dashboard


// registration data

let registrationData=JSON.parse(localStorage.getItem("registrationData")) || [];
let registrationIndex=highIndex(registrationData)+1;
 
function highIndex(registrationData){
    let maxIndex=100;
    for(let user of registrationData){
        if(user.Id>maxIndex){
            maxIndex=user.Id;
        }
    }
    return maxIndex;
}

function validateForm(){
if(fullName.value==="" || email.value==="" || phone.value==="" || college.value==="" || yearSelect.value=="Year"){
    alert("Please fill all the fields");
   return;
}
if(!email.value.includes("@") || !email.value.includes(".")){
    alert("Please enter a valid email address");
    return;
}
if(phone.value.length!==10 || isNaN(phone.value)){
    alert("Please enter a valid 10-digit phone number");
    return;
}
else{

let registerObj={
    fullName:fullName.value,
    email:email.value,
    phone:phone.value,
    college:college.value,
    year:yearSelect.value,
    TeamMembers:TeamMembers.value,
    Id:registrationIndex
}
console.log(registerObj);
registrationData.push(registerObj);
localStorage.setItem("registrationData",JSON.stringify(registrationData));
registrationIndex++;
 alert("Registration successful!");
}
   
}

