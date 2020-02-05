// Step 133 IF Statements / Conditional Branching / Get Date Methods (including .getHour Method
  //  -
   // JavaScript Exercises //


    //Declare Global Variables to be used in amEyeLate() **imagine that this is part of an optometrist office management system...this function being used to handle the scheduling procedure for patient's yearly eye Exams . The purpose is to implement a standard operating procedure for the office staff to follow to improve the patient adherence to the yearly Eye Exam Recommendation.//


    // assume that another part of the office management system would provide the input for these variables based on the date of the patient's last eye exam.//
   
    let patient = "Martha Saunders";
   
    let year = 2019;
    let month = 03;
    let day = 03;

today =  new Date();
   
lastEyeExam = new Date(year,month,day);
lastEyeExam.setDate(year,month,day);

nextEyeExam = new Date();
nextEyeExam.setDate(year,(month + 11),day);

mailOutReminder = new Date();
mailOutReminder.setDate((+ 10);
    let actionDate = today;
    let followUpDate = today.setDate(+ 14);

    let yearlyEyeExamScheduled = "Scheduled Appointment Will Be Recorded Here";


    function amEyeLate()  {
         if (((nextEyeExam.getMonth()) >= (lastEyeExam.getMonth(+10))) {
    document.getElementById("Patient_History_Status").innerHTML= "Patient_History_Status_Information: [ Today's Date: " + today + " ]     [ Patient: " +  patient + " ]   [ Date of Last Eye Exam: " + lastEyeExam + " ]    [ Date Patient is Due for Next Yearly Eye Exam: " + nextEyeExam + " ]"; 
         }
   
    }
 console.log(patient);
    console.log(lastEyeExam);
    console.log(nextEyeExam);
    console.log(patient,lastEyeExam,nextEyeExam);








    // function amEyeLate() {









    // }















    //}





























    // if(((year) > (lastYear)) || (( month -10 ) >= (lastMonth))) {
    // document.getElementById("EyeExam").innerHTML = "Action Date:" + mailOut + " Action: Mail Yearly Eye Exam Reminder including 15% discount. Follow Up Date: " + (today.getDate()+14)+ " Follow Up Action: Call patient to schedule exam if no RSVP to Mail-Out.";//
    // }
    //}
    //console.log(lastExam)//
    // }
