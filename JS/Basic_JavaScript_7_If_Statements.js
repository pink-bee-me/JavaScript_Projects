// Step 133 IF Statements / Conditional Branching / Get Date Methods (including .getHour Method
  //  -
   // JavaScript Exercises //
  

 function  salutationsHiAndBye() {

 var today = new Date()
 today.setDate(today.getHours());
 console.log(today + "  value of today");

 if (18 > today.getHours() && today.getHours() > 12) {
    document.getElementById("Greeting").innerHTML = "Good Afternoon!! Let's get our Yearly Eye Exams Scheduled to make sure our Patients stay Well !!!";
    }
    else if  (12 > today.getHours() && today.getHours() >= 0) {
       document.getElementById("Greeting").innerHTML = "Good Morning!! Today Is a great day to send out reminders for  Yearly Eye Exams, because Well-Ness Checks are a key factor when it comes to happy, healthy, and active Patients !!!";
}
else if (18 < today.getHours() && today.getHours( )>=23)
{
        document.getElementById("Greeting").innerHTML = "What a great day...tomorrow we will contact any patients that were sent Reminders 14 days ago if no R.S.V.P (no response has been recorded of file)... It is NOT uncommon for people have a hard time making appointments with their healthcare providers and many find the whole process of dealing with any aspect of their health and medical issues makes them anxious and uncomfortable. This is a major concern for healthcare providers, as this avoidance can lead to missed appointments and delays in necessary treatment. A  little compassion and a friendly voice can go a long way... and sometimes a phone call can make a huge impact when it comes to easing those feelings of dread and anxiety that can often be a result of thinking asbout the doctor's office. the difference - You can be that voice and makes a difference !";
}
        console.log(today.getHours());


    //Declare Global Variables to be used in amEyeLate() **imagine that this is part of an optometrist office management system...this function being used to handle the scheduling procedure for patient's yearly eye Exams . The purpose is to implement a standard operating procedure for the office staff to follow to improve patient adherence to the yearly Eye Exam Recommendation.//


    // assume that another part of the office management system would provide the input for these variables based on the date of the patient's last eye exam.//
//Patient Name//

    var patient = "Martha Saunders";

 // feel free to change the variables to test the demo ... these are made-up (assumed) variables that  represent the office data that would be  passed from data stored with in another section of the office management and records keeping software already installed at the location of the demo trial//

    var year = 2019;
    var month = 02;
    var day = 03;

// Date Object  Last Eye Exam created with the new Date() constructor is passed the variables: year, month, and day ... (lines 32,33,34 respectively(above))  hypothgetically from the office records database based on the last eye exam that the patient has on record with the clinic.. This is the date that all subsequent figures and dates are either constructed from or referenced to in someway or another.// 

var lastEyeExam = new Date(year,month,day);
console.log(lastEyeExam + "  lastEyeExam"); 
// check value in console  

//nextEyeExam variable - created via the passing of the lastEyeExam value to  the new Date() constructor; once the value is passed to nextEyeExam, the .setDate() and .getDate() methods are used to set the date forward a year ( value I chose to use was 365 days, because my measuure did not need to be precise, close in gerneral is good enough as long as teh unit of time is measurable and consistant //

var nextEyeExam = new Date(lastEyeExam);
newEyeExam.setDate(newEyeExam.getDate() + 365 );
console.log(nextEyeExam + "  nextEyeExamDue"); // check value in console

// mailOutReminder  represents the date  a reminder should be mailed to glean optimal results: created by passing the nextEyeExam Date value to the new Date() constructor: the variable once initialized is further defined with the setDate() and getDate()method: the mailOutReminder date is 30 days prior to the nextEyeExam date, which gives the office 30 days to contact the patient, give patient time to respond (14 days) ,reach out to patient through follow-up call and  schedule the eye exam.

var mailOutReminder = new Date(nextEyeExam);
mailOutReminder.setDate(mailOutReminder.getDate() - 30);
 console.log(mailOutReminder +  "  mailOutReminder");


 //Scenario: The current date is a time period longer than 30 days ( which is the suggested length of time between the mailout date and the next Eye Exam)...This section is here to calculate the difference(in days) between the current date and the pre-figured mailOutReminder date. Then, that diff value will be  used  to offset the mailout date to the current date , and teh followup date 14 days after that date. The exam date will not change. when scheduling the appointment for the Exam the last exam date which will be this years exam date will effectively get the cycle back up to date. The goal is to establish the  correct date that the reminder will be mailed ; therefore effectively ensuring the appropriate time frame is still intact for the follow-up call and so forth. It essentially gets any lag in productivity or schedule gliches back in line with the program and the office schedule.Especially  useful, when starting up and working to process a new patient  data base. //


 //Time Difference between currentDate and The MailOut Reminder Date used to determine the amount of offset (if any) is needed for accurate calculation of the datre to mail the Reminder and the follow-up call etc. Getting the Time value in milliseconds to be able to execute the subtraction operation//
//Current date and Time --Today's date//

var currentDate =  new Date( );
currentDate.setDate(currentDate);
console.log(currentDate + "  value of currentDate");

 var timeDiff = Math.abs(currentDate.getTime()) - mailOutReminder.getTime();

//Days Difference returning the value to "days" and determining the number of days difference between the current Date and the mail out Reminder date as figured previously.//

  var daysDiff =  Math.ceil(timeDiff / (1000 * 3600 * 24));
  console.log(daysDiff + "  days diff");

 // This serves to correct any time lapse or descrepencies that may occur for various reasons, for example weekends,  or times when you cannot make calls that day, or even when you first implement the system and you may have to "catch-up" as far as your scheduling efforts may be out of sync and need an overhaul to get back on track...especially if efforts have been neglected in this particuular area for sometime. You may be dealing with a backlog of patients that have way over-due exams. This will get the mailout dates etc., back in line and accurate The creation of the reminderDate variable holds the value including any corrections that need to be handled.//

var reminderDate = new Date(mailOutReminder);
reminderDate.setDate(reminderDate.getDate() + daysDiff);
console.log(reminderDate + "  value of reminderDate");


 var  followUpDate = new Date(reminderDate);
followUpDate.setDate(followUpDate.getDate()+ 14);
 console.log(followUpDate + "  value of  followUpDate");


//Function amEyeLate( )
 function  amEyeLate()  {
 if  ((currentDate.getTime()) > (mailOutReminder.getTime()));
    document.getElementById("Patient_History_Status").innerHTML= "Patient History  as of  Today's Date: " + currentDate;
      document.getElementById("Patient_Name").innerHTML= "Patient: " +  patient ;
       document.getElementById("Date_of_Last_Exam").innerHTML= "Date of Last Eye Exam: " + lastEyeExam;
        document.getElementById("Next_Yearly_Eye_Exam").innerHTML= "Next Yearly Eye Exam Due: " +  nextEyeExam;
      if ((currentDate.getTime()) > (mailOutReminder.getTime())) {
      var reminderDate=new Date(mailOutReminder);
      reminderDate.setDate(reminderDate.getDate() + daysDiff);
      console.log(reminderDate + "  value of reminderDate")         document.getElementById("Reminder").innerHTML= "Date To Mail Reminder: " +  reminderDate;}
    if  (daysDiff > 0) { 
 document.getElementById("Is_It_Time_For_Reminder").innerHTML =  
 "Send Out Reminder - Past Due as of : " + mailOutReminder ;}
 if ((mailOutReminder.getTime())> (currentDate.getTime())) {
   document.getElementById("Is_It_Time_For_Reminder").innerHTML ="Not Time For Reminder!";
document.getElementById("Mail_Reminder").innerHTML = "Mail Reminder : " + mailOutReminder;
document.getElementById("Follow_Up").innerHTML = "Follow Up with Telephone Call  If No Response From Patient By : " + followUpDate;
document.getElementById("Message").innerHTML = "Assist Patient:  Schedule Appointment For Yearly Eye Exam Wellness Check";
 }




    // if(((year) > (lastYear)) || (( month -10 ) >= (lastMonth))) {
    // document.getElementById("EyeExam").innerHTML = "Action Date:" +////mailOut + " Action: Mail Yearly Eye Exam Reminder including 15% ////discount. Follow Up Date: " + (today.getDate()+14)+ " Follow Up //
//Action: Call patient to schedule exam if no RSVP to Mail-Out.//

console.log(reminderMailedDate + "  reminderMailOutDate");
         }
