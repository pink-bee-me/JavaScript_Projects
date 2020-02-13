 // Step 133 IF Statements / Conditional Branching / Get Date Methods (including .getHour Method
  //  -
   // JavaScript Exercises //
  

 function  Salutations_Hi_And_Bye() {

 var today = new Date()
 today.setDate(today.getHours());
 console.log(today.getHours() + "  value of today");

if (18 > today.getHours() && today.getHours() > 12) {
    document.getElementById("Greeting").innerHTML = "Good Afternoon!! Let's get our Yearly Eye Exams Scheduled to make sure our Patients stay Well !!!";
    }
    else if  (12 > today.getHours() && today.getHours() >= 0) {
       document.getElementById("Greeting").innerHTML = "Good Morning!! Today Is a great day to send out reminders for The Yearly Eye Exam. Well-Ness Checks effect the longevity and quality of a person's life and isn't it awesome to play an active role in increasing a person's quality of life. So, CHOOSE to be happy! CHOOSE to be healthy! CHOOSE TO BE ACTIVE!! CHOOSE TO PARTICIPATE FULLY !! CHOOSE TO TAKE RESPONSIBILITY FOR YOUR ACTIONS!! CHOOSE to BE PRESENT in THE MOMENT !! and CHOOSE TO BE KIND!!";  
}
 else if (18 < today.getHours() && today.getHours()<= 23) {
 
            document.getElementById("Greeting").innerHTML = "Good Evening!! What a great day!!...Tomorrow we will contact any patients that were sent Reminders 14 days ago if no R.S.V.P (no response has been recorded of file)..." 
        + "It is NOT uncommon for people have a hard time making appointments with healthcare providers. Many report that the process makes them anxious and uncomfortable. This is a major concern for healthcare providers,"
        + " as this avoidance can lead to missed appointments and delays in necessary treatment. A friendly voice and a little compassion go a long way... Sometimes, reaching out through a phone call can make a huge impact."
        + " You can be that 'voice' and make a difference!";
    //Declare Global Variables to be used in Am_Eye_Late() **imagine that this is part of an optometrist office management system...this function being used to handle the scheduling procedure for patient's yearly eye Exams . The purpose is to implement a standard operating procedure for the office staff to follow to improve patient adherence to the yearly Eye Exam Recommendation.//
 }

 }


 // feel free to change the variables to test the demo ... these are made-up (assumed) variables that  represent the office data that would be  passed from data stored with in another section of the office management and records keeping software already installed at the location of the demo trial//



// Date Object  Last Eye Exam created with the new Date() constructor is passed the variables: year, month, and day ... (lines 32,33,34 respectively(above))  hypothetically from the office records database based on the last eye exam that the patient has on record with the clinic.. This is the date that all subsequent figures and dates are either constructed from or referenced to in someway or another.// 



//nextEyeExam variable - created via the passing of the lastEyeExam value to  the new Date() constructor; once the value is passed to nextEyeExam, the .setDate() and .getDate() methods are used to set the date forward a year ( value I chose to use was 365 days, because my measuure did not need to be precise, close in gerneral is good enough as long as teh unit of time is measurable and consistant //


function Am_Eye_Late() { 
  let lastName = document.getElementById("LastName").value;
  let firstName =  document.getElementById("FirstName").value;
  let lastEyeExam = document.getElementById("DateOfLastEyeExam").value;
  console.log(`lastName firstName lastEyeExam`);

let patient = createPatient("Saunders","Martha","2019-01-01")
function createPatient(lastName,firstName,lastExamDate){
   return{
      lastName,
      firstName,
      lastExamDate
    }; 
}


  
fullName = function() {
      return this.firstName + " " + this.lastName;
      } 
         lastEyeExam= getElementById("DateOfLastEyeExam").value
         let yearInt = lastEyeExam.substring(0,4);
         console.log(yearInt);

         let monthInt = lastEyeExam.substring(5,7);
         console.log(monthInt);

         let dayInt = lastEyeExam.substring(8,10);
         console.log(dayInt);

         let year = parseInt(yearInt,10);
         console.log(year);

         let month = parseInt(monthInt,10);
         console.log(month);

         let day = parseInt(dayInt,10);
         console.log(day);  
         
         this.lastEyeExam = new Date(year,month,day);
         console.log(this.lastEyeExam);

   }
   
        
         
         lastEyeExam = new Date(year, month, day);
         console.log(lastEyeExam + " lastEyeExam"); 
         // check value in console  
            


        
         
         var nextEyeExam = new Date(lastEyeExam);
         nextEyeExam.setDate(nextEyeExam.getDate() + 365 );
         console.log(nextEyeExam + "  nextEyeExamDue"); // check value in console
         
         // mailOutReminder  represents the date  a reminder should be mailed to glean optimal results: created by passing the nextEyeExam Date value to the new Date() constructor: the variable once initialized is further defined with the setDate() and getDate()method: the mailOutReminder date is 30 days prior to the nextEyeExam date, which gives the office 30 days to contact the patient, give patient time to respond (14 days) ,reach out to patient through follow-up call and  schedule the eye exam.
         
         var mailOutReminder = new Date(nextEyeExam);
         mailOutReminder.setDate(mailOutReminder.getDate() - 30);
          console.log(mailOutReminder +  "  mailOutReminder");
         
         
          //Scenario: The current date is a time period longer than 30 days ( which is the suggested length of time between the mailout date and the next Eye Exam)...This section is here to calculate the difference(in days) between the current date and the pre-figured mailOutReminder date. Then, that diff value will be  used  to offset the mailout date to the current date , and teh followup date 14 days after that date. The exam date will not change. when scheduling the appointment for the Exam the last exam date which will be this years exam date will effectively get the cycle back up to date. The goal is to establish the  correct date that the reminder will be mailed ; therefore effectively ensuring the appropriate time frame is still intact for the follow-up call and so forth. It essentially gets any lag in productivity or schedule gliches back in line with the program and the office schedule.Especially  useful, when starting up and working to process a new patient  data base. //
         
         
         //Time Difference between value of [currentDate] and the value of [mailOutReminder] determine number of days (if any) that the mailOutReminder needs to be OFFSET//
         //To perform the Arithmetic Operation of Subtraction in this instance the Date Object with the .getTime()method  was employed //
         
         //The Establishment of the Current date and Time//
         var currentDate =  new Date();
         console.log(currentDate + " currentDate value");
         //Print Console log to check variable type and value//
         
         
         //Use Math.abs() function and  return the absolute value of the difference between the two dates (represented in milliseconds since January 1st , 1970) obtained via the Date.getTime() method //
         var timeDiff = Math.abs(currentDate.getTime()) - mailOutReminder.getTime();
         console.log(timeDiff + " timeDiff value");
         //Print Console log to check variable type and value//
         
         //Days Difference returning the value to "days" and determining the number of days difference between the current Date and the mail out Reminder date as figured previously.//
         var daysDiff =  Math.ceil(timeDiff / (1000 * 3600 * 24));
         console.log(daysDiff + " daysDiff value");
         //Print Console log to check variable type and value//
          
         
         var  reminderDate = new Date(mailOutReminder);
              reminderDate.setDate(reminderDate.getDate() + daysDiff);
         
         //Print Console log to check variable type and value//    
         console.log(reminderDate + " reminderDate value");
         
         // followUpDate is the date 14 days after the Mail Out is sent- phone contact is made with patient//
         var  followUpDate = new Date(reminderDate);
              followUpDate.setDate(followUpDate.getDate()+ 14);
         
         //Print Console log to check variable type and value//
         console.log(followUpDate + " followUpDate value");
         
               if  ((currentDate.getTime()) > (mailOutReminder.getTime())) {
                        document.getElementById("Patient_History_Status").innerHTML= "Patient History  as of  Today's Date: " + currentDate;
                        document.getElementById("Patient_Name").innerHTML= "Patient: " +  patient ;
                        document.getElementById("Date_of_Last_Exam").innerHTML= "Date of Last Eye Exam: " + lastEyeExam;
                        document.getElementById("Next_Yearly_Eye_Exam").innerHTML= "Next Yearly Eye Exam Due: " +  nextEyeExam;
                      }
                        if ((currentDate.getTime()) > (mailOutReminder.getTime())) {
                        var reminderDate=new Date(mailOutReminder);
                        reminderDate.setDate(reminderDate.getDate() + daysDiff);
                        console.log(reminderDate + "  value of reminderDate");         
                        document.getElementById("Reminder").innerHTML= "Date To Mail Reminder: " +  reminderDate;
                     }
               if  (daysDiff > 0) { 
                        document.getElementById("Is_It_Time_For_Reminder").innerHTML =  
                        "Send Out Reminder!!! - Past Due as of : " + mailOutReminder; 
                     }
               if ((mailOutReminder.getTime())> (currentDate.getTime())) {
                        document.getElementById("Is_It_Time_For_Reminder").innerHTML ="Wait Please... It's NOT Quite Time For The Reminder To Be Sent Out.";
                        document.getElementById("Mail_Reminder").innerHTML = "Mail Reminder : " + mailOutReminder;
                        document.getElementById("Follow_Up").innerHTML = "Follow Up with Telephone Call  If No Response From Patient By : " + followUpDate;
                        document.getElementById("Message").innerHTML = "Assist Patient:  Schedule Appointment For Yearly Eye Exam Wellness Check";
            }
         
      