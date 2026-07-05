let button=document.querySelector("#btn");
let input=document.querySelector("#txt");
let heading=document.querySelector("#title");
let button2=document.querySelector("#save");
let one=document.querySelector("#attend");
let two=document.querySelector("#cgpa");
let three=document.querySelector("#assign");
let subjectInput = document.querySelector("#lool");
let totalClassesInput = document.querySelector("#tool");
let subjectHeading = document.querySelector("#sub");
let classesHeading = document.querySelector("#num");
let attendanceHeading = document.querySelector("#bum");
let nextbutton=document.querySelector("#next");
let lecture=document.querySelector("#keep");
let savebutton=document.querySelector("#poop");
let savecgpa=document.querySelector("#tree");
let tracker = document.querySelector("#tracker");
let label = document.querySelector("#lund");
let subjectNumber = document.querySelector("#agon");
let begin = document.querySelector("#letgo");
let logout = document.querySelector("#logout");
console.log(logout);

let curseSubject = document.querySelector("#sour");
let assignmentNumber = document.querySelector("#umami");
let dueDate = document.querySelector("#due");

let tableData = document.querySelector("#pumpkin");
let resultDone = document.querySelector("#assresult");
let saveAssign = document.querySelector("#hope");
let saveme=document.querySelector("#showmy");
let PubjectS = 0;
let curse = 1;
let recordPage = document.querySelector("#recordPage");
let attendanceRecords = document.querySelector("#attendanceRecords");
let cgpaRecords = document.querySelector("#cgpaRecords");
let assignmentRecords = document.querySelector("#assignmentRecords");
let records=document.querySelector("#records");
button.addEventListener("click",function(){
    heading.innerText=input.value;
     input.style.display = "block";
     button2.style.display="block";
 button.style.display = "none";
});
button2.addEventListener("click",function(){
    if(input.value==""){
        console.log("Field can not be empty");
    }else{
    heading.innerText="WElCOME " + input.value;
      input.style.display="none";
      button2.style.display="none";
      one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
    records.style.display="block";
    logout.style.display="block";
    console.log(logout.style.display);
    localStorage.setItem("username",input.value);
    }
});
one.addEventListener("click", function(){
records.style.display="none";
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    records.style.display="none";
    totalClassesInput.style.display="block";
    subjectHeading.style.display="block";
    classesHeading.style.display="block";
    attendanceHeading.style.display="block";
nextbutton.style.display="block";
subjectInput.style.display = "block";
lecture.style.display="block";
savebutton.style.display="block";
logout.style.display="none";
});
nextbutton.addEventListener("click",function(){
    subjectHeading.innerText=subjectInput.value;
    classesHeading.innerText=Number(totalClassesInput.value);
    attendanceHeading.innerText=Number((lecture.value/totalClassesInput.value)*100)+"%";
    let percentage =
    (Number(lecture.value) / Number(totalClassesInput.value)) * 100;
if (percentage >= 75) {
    attendanceHeading.style.color = "green";
}
else {
    attendanceHeading.style.color = "red";
}
});
let cgpatitle=document.querySelector("#cgpatitle");
let labeltitle=document.querySelector("#label");
let subjectcount=document.querySelector("#subjectcount");
let cgpaButton=document.querySelector("#start");
let inputsubject=document.querySelector("#currentsubject");
let namesubject=document.querySelector("#subjectname");
let markmte=document.querySelector("#mte");
let markcws=document.querySelector("#cws");
let markete=document.querySelector("#ete");
let nextcgpa=document.querySelector("#noob");
let result=document.querySelector("#risult");
let totalSubjects=0;
let currentSubject=1;
let subjects=[];
let resultTable = document.querySelector("#resultTable");
let finalResult = document.querySelector("#finalResult");
two.addEventListener("click",function(){
    one.style.display="none";
    two.style.display="none";
    three.style.display="none";
    records.style.display="none";
    cgpatitle.style.display="block";
    labeltitle.style.display="block";
    subjectcount.style.display="block";
    cgpaButton.style.display="block";
    logout.style.display="none";
});
savebutton.addEventListener("click", function(){

    localStorage.setItem("subject", subjectHeading.innerText);
    localStorage.setItem("classes", classesHeading.innerText);
    localStorage.setItem("attendance", attendanceHeading.innerText);

    subjectHeading.style.display = "none";
    classesHeading.style.display = "none";
    attendanceHeading.style.display = "none";
    logout.style.display="none";

    alert("Attendance saved successfully!");

});
cgpaButton.addEventListener("click", function () {

    totalSubjects = Number(subjectcount.value);

    if(totalSubjects <= 0){
        alert("Enter valid number of subjects");
        return;
    }

    cgpatitle.style.display="none";
    labeltitle.style.display="none";
    subjectcount.style.display="none";
    cgpaButton.style.display="none";

    inputsubject.style.display="block";
    namesubject.style.display="block";
    markmte.style.display="block";
    markcws.style.display="block";
    markete.style.display="block";
    nextcgpa.style.display="block";
    logout.style.display="none";

    inputsubject.innerText = "Subject " + currentSubject;
});
nextcgpa.addEventListener("click", function(){

    if(
        namesubject.value=="" ||
        markmte.value=="" ||
        markcws.value=="" ||
        markete.value==""
    ){
        alert("Fill all fields");
        return;
    }

    subjects.push({

        subject : namesubject.value,

        mte : Number(markmte.value),

        cws : Number(markcws.value),

        ete : Number(markete.value),

        total :
        Number(markmte.value)+
        Number(markcws.value)+
        Number(markete.value)

    });

    if(currentSubject == totalSubjects){

        inputsubject.style.display="none";
        namesubject.style.display="none";
        markmte.style.display="none";
        markcws.style.display="none";
        markete.style.display="none";
        nextcgpa.style.display="none";

        resultTable.style.display = "table";
cgpaResult.style.display = "block";
savecgpa.style.display="block";
logout.style.display="none";

let totalGradePoints = 0;

for(let i=0;i<subjects.length;i++){

    let grade="";
    let point=0;

    if(subjects[i].total>=90){
        grade="A+";
        point=10;
    }

    else if(subjects[i].total>=80){
        grade="A";
        point=9;
    }

    else if(subjects[i].total>=70){
        grade="B";
        point=8;
    }

    else if(subjects[i].total>=60){
        grade="C";
        point=7;
    }

    else if(subjects[i].total>=50){
        grade="D";
        point=6;
    }

    else if(subjects[i].total>=40){
        grade="E";
        point=5;
    }

    else{
        grade="F";
        point=0;
    }

    totalGradePoints += point;

    let row=resultTable.insertRow();

    row.insertCell().innerText=subjects[i].subject;
    row.insertCell().innerText=subjects[i].mte;
    row.insertCell().innerText=subjects[i].cws;
    row.insertCell().innerText=subjects[i].ete;
    row.insertCell().innerText=subjects[i].total;
    row.insertCell().innerText=grade;
    row.insertCell().innerText=point;

}

let cgpa=(totalGradePoints/subjects.length).toFixed(2);

cgpaResult.innerText="Expected CGPA : "+cgpa;

        return;
    }

    currentSubject++;

    inputsubject.innerText = "Subject " + currentSubject;

    namesubject.value="";
    markmte.value="";
    markcws.value="";
    markete.value="";
    logout.style.display="none";

});
savecgpa.addEventListener("click", function(){

    localStorage.setItem("cgpa", cgpaResult.innerText);

    alert("CGPA Saved!");

});
three.addEventListener("click",function(){

    one.style.display="none";
    two.style.display="none";
    three.style.display="none";
    logout.style.display="none";

    tracker.style.display="block";
    label.style.display="block";
    subjectNumber.style.display="block";
    begin.style.display="block";
    records.style.display="none";

});
begin.addEventListener("click", function(){

    totalSubjects = Number(subjectNumber.value);

    if(totalSubjects<=0){
        alert("Enter valid number of subjects");
        return;
    }

    tracker.style.display="none";
    label.style.display="none";
    subjectNumber.style.display="none";
    begin.style.display="none";
    records.style.display="none";
    logout.style.display="none";

    curseSubject.style.display="block";
    assignmentNumber.style.display="block";
    dueDate.style.display="block";

    saveAssign.style.display="block";

    curseSubject.placeholder="Subject "+curse;

});
saveAssign.addEventListener("click",function(){

    if(
        curseSubject.value=="" ||
        assignmentNumber.value=="" ||
        dueDate.value==""
    ){
        alert("Fill all fields");
        return;
    }
    let rowData = tableData.insertRow();

rowData.insertCell().innerText = curseSubject.value;
rowData.insertCell().innerText = assignmentNumber.value;
rowData.insertCell().innerText = dueDate.value;

    curse++;

    if(curse>totalSubjects){

        curseSubject.style.display="none";
        assignmentNumber.style.display="none";
        dueDate.style.display="none";
        saveAssign.style.display="none";

        tableData.style.display="table";
        saveme.style.display="block";

        return;
    }

    curseSubject.value="";
    assignmentNumber.value="";
    dueDate.value="";
    records.style.display="none";
    recordPage.style.display="none";

    curseSubject.placeholder="Subject "+curse;

});
saveme.addEventListener("click",function(){
      localStorage.setItem("savesubject",curseSubject.value);
    localStorage.setItem("asssave",assignmentNumber.value);
    localStorage.setItem("duesave",dueDate.value);
    alert("Data saved!!");
});
records.addEventListener("click",function(){
    records.style.display="none";
    one.style.display="none";
    two.style.display="none";
    three.style.display="none";
    recordPage.style.display="block";
    attendanceRecords.style.display="block";
    assignmentRecords.style.display="block";
    cgpaRecords.style.display="block";
    logout.style.display="none";

    let lubjet=localStorage.getItem("subject");
 let kluss=localStorage.getItem("classes");
   let palak=localStorage.getItem("attendance");
   attendanceRecords.innerHTML =
"Subject : " + lubjet + "<br>" +
"Classes : " + kluss + "<br>" +
"Attendance : " + palak;
    
   let grape=localStorage.getItem("cgpa");
   cgpaRecords.innerText=grape;


let savePUB=localStorage.getItem("savesubject");
let lemon=localStorage.getItem("asssave");
let belly=localStorage.getItem("duesave");
assignmentRecords.innerHTML =
"Subject : " + savePUB + "<br>" +
"Assignments : " + lemon + "<br>" +
"Due : " + belly;
});


let savedUser = localStorage.getItem("username");

if(savedUser != null){
    heading.innerText = "WELCOME " + savedUser;

    button.style.display = "none";
    input.style.display = "none";
    button2.style.display = "none";

    one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
    records.style.display = "block";
}

logout.addEventListener("click", function () {

    localStorage.removeItem("username");

    location.reload();

});
let glow = document.querySelector("#cursorGlow");

document.addEventListener("mousemove", function(event){

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

});
let magneticButtons = document.querySelectorAll(".magnetic");
magneticButtons.forEach(function(button){

    button.addEventListener("mousemove", function(e){

        let rect = button.getBoundingClientRect();

        let x = e.clientX - rect.left - rect.width / 2;
        let y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =
        `translate(${x * 0.2}px, ${y * 0.2}px)`;

    });

    button.addEventListener("mouseleave", function(){

        button.style.transform = "translate(0,0)";

    });

});