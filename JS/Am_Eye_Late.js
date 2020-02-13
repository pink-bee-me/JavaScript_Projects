 function greeting() {
    let today = new Date();
    today.setDate(today.getHours());
    console.log(today.getHours() + " today.getHours");
    if (12 > today.getHours() && today.getHours() >= 0) {
        document.getElementById("Greeting").innerHTML = `Good Morning!! Today Is a great day to send out reminders 
                                                         for The Yearly Eye Exam and reach out to those who need 
                                                         assistance with scheduling their yearly eye exam.
                                                         Have a great Day!`;
    }
    else if (18 > today.getHours() && today.getHours() > 12) {
        document.getElementById("Greeting").innerHTML = `Good Afternoon!! Let's get our Yearly Eye Exams Scheduled to make 
                                                         sure our patients stay well!!!`;
    }
    else {
        document.getElementById("Greeting").innerHTML = `Good Evening!! It's time to call it a day!!...
                                                        Tomorrow we will contact any patients that were sent Reminders 14 days ago if no R.S.V.P 
                                                        (no response has been recorded of file)... it is NOT uncommon for people have a hard time making
                                                        appointments with healthcare providers. Many patients report that the process makes them anxious 
                                                        and uncomfortable. This is a major concern for healthcare providers, as this avoidance can lead 
                                                        to missed appointments and delays in necessary treatment. A friendly voice and a little compassion 
                                                        go a long way... Sometimes, reaching out through a phone call can make a huge impact.
                                                        You can be that 'voice' and make a difference!`;
    }
}
 

    function am_Eye_Late() {

   

        let $ = function(id) {
           return document.getElementById(id);
        }
        var lastName =  $("LastName").value;     //called the $(id) function to retrieve information from the html user input
        var firstName = $("FirstName").value;
        var lastEyeExam = $("LastEyeExam").value;


    console.log(lastName, firstName, lastEyeExam); // Consrtuctor function to create patiient objects (will make expansion of program easier in future ie. w/ database)


    w3.displayObject("Last_Name",lastName) //to display info in table?
        
    //to take the string data received from the html date input from the user for the variable lastEyeExam and convert to number and then to integer and then back to date object
            
            let year = lastEyeExam.substring(0,4);
                console.log(year);
            
            let month = lastEyeExam.substring(5,7);
                console.log(month);
            
            let day = lastEyeExam.substring(8,10);
                console.log(day);
            
            let year_Int = parseInt(year,10);
            console.log(year_Int);
            
            let month_Int = parseInt(month,10);
            console.log(month_Int);
            
            let day_Int = parseInt(day,10);
            console.log(day_Int); 
            
            var currentDate = new Date();
            console.log(currentDate + " currentDate (or the value for today's date)")
            
            var dateLastEyeExam = new Date(year_Int,(month_Int - 1),day_Int);  //minus one because JavaScript months start with the index of 0 for January
            console.log(dateLastEyeExam + " dateLastEyeExam"); // now my lastEyeExam Data has been returned to a date type, but the new name is dateLastEyeExam
              

            var nextEyeExam = new Date(dateLastEyeExam); //creating variable newEyeExam by making it equal to dateLastEyeExam  then altering the value through getting and setting methods
                nextEyeExam.setDate(nextEyeExam.getDate() + 365 ); //nextEyeExam due one year from last eye exam ideally ( so I added 365 days)
               
                console.log(nextEyeExam + "  nextEyeExam"); // check value in console
            
            var mailOutDate = new Date(nextEyeExam)
            mailOutDate.setDate(mailOutDate.getDate() - 30);
            console.log(mailOutDate + " mailOutDate");

            var followUpDate = new Date(mailOutDate)
            followUpDate.setDate(followUpDate.getDate() + 14);
            console.log(followUpDate + " followUpDate");

            var adjustedMailOutDate = new Date(currentDate)
            adjustedMailOutDate.setDate(adjustedMailOutDate.getDate() + 1);
            console.log(adjustedMailOutDate + " adjustedMailOutDate");

            var adjustedFollowUpDate = new Date(adjustedMailOutDate)
            adjustedFollowUpDate.setDate(adjustedFollowUpDate.getDate() + 14);
            console.log(adjustedFollowUpDate + " adjustedFollowUpDate");

            var adjustedNextEyeExamDate = new Date(adjustedMailOutDate)
            adjustedNextEyeExamDate.setDate(adjustedNextEyeExamDate.getDate() + 30);
            console.log(adjustedNextEyeExamDate + " adjustedNextEyeExamDate");

            var notice = "The Next Exam Due Date has already passed or there is NOT enough time to give the patient ample notice...The Reminder should be mailed Tomorrow, and the Next Exam Date will be adjusted to 30days from  the Mail-Out Date."
            
            
            if (mailOutDate.getTime() > currentDate.getTime() || currentDate.getDate() - 30 < mailOutDate.getDate()) {
    
                  
                    document.getElementById("AdjustedMailOutDateNotice").innerHTML = notice;
                    document.getElementById("AdjustedMailOutDate").innerHTML = adjustedMailOutDate;
                    document.getElementById("AdjustedFollowUpDate").innerHTML = adjustedFollowUpDate;
                    document.getElementById("AdjustedNextExamDate").innerHTML = adjustedNextEyeExamDate; 
                    

             } else  {
                    document.getElementById("NextEyeExamDate").innerHTML = nextEyeExamDate;
                    document.getElementById("mailOutDate").innerHTML = mailOutDate;
                    document.getElementById("followUpDate").innerHTML = followUpDate;
                }
                    
            
            
             //Scenario: The current date is a time period longer than 30 days ( which is the suggested length of time between the mail-out date and the next Eye Exam)...This section is here to calculate the difference(in days) between the current date and the pre-figured mailOutReminder date. Then, that diff value will be  used  to offset the mail-out date to the current date , and teh followup date 14 days after that date. The exam date will not change. when scheduling the appointment for the Exam the last exam date which will be this years exam date will effectively get the cycle back up to date. The goal is to establish the  correct date that the reminder will be mailed ; therefore effectively ensuring the appropriate time frame is still intact for the follow-up call and so forth. It essentially gets any lag in productivity or schedule glitch back in line with the program and the office schedule.Especially  useful, when starting up and working to process a new patient  data base. //
            
            
            //Time Difference between value of [currentDate] and the value of [mailOutReminder] determine number of days (if any) that the mailOutReminder needs to be OFFSET//
            //To perform the Arithmetic Operation of Subtraction in this instance the Date Object with the .getTime()method  was employed //
            
            //The Establishment of the Current date and Time//
            var currentDate =  new Date();
                console.log(currentDate + " currentDate value");
            //Print Console log to check variable type and value//
              
               
            //Use Math.abs() function and  return the absolute value of the difference between the two dates (represented in milliseconds since January 1st , 1970) obtained via the Date.getTime() method //
            var timeDiff = Math.abs(currentDate.getTime()) - mailOutDate.getTime();
                console.log(timeDiff + " timeDiff value");
            //Print Console log to check variable type and value//
  
            //Days Difference returning the value to "days" and determining the number of days difference between the current Date and the mail out Reminder date as figured previously.//
            var daysDiff =  Math.ceil(timeDiff / (1000 * 3600 * 24));
                console.log(daysDiff + " daysDiff value");
            //Print Console log to check variable type and value
               

            document.getElementById("Today_Date").innerHTML = currentDate;
            document.getElementById("Last_Name").innerHTML = lastName;
            document.getElementById("First_Name").innerHTML = firstName;    
            document.getElementById("LastExamDate").innerHTML = dateLastEyeExam;   
            document.getElementById("NextExamDate").innerHTML = nextEyeExam;
            document.getElementById("MailOutDate").innerHTML = mailOutDate;
            document.getElementById("FollowUpDate").innerHTML = followUpDate;





        
                     if  ((currentDate.getTime()) > (mailOutDate.getTime())) {
                     document.getElementById("AdjustedMailOutDateNotice2").innerHTML = "The Mail-Out Date was adjusted (as well as the Next Exam Date and Follow up Date) to allow ample time to notify patient and re-schedule exam.";
                     document.getElementById("AdjustedMailOutDate").innerHTML = adjustedMailOutDate;
                        
                         console.log(adjustedMailOutDate + "  adjustedMailOutDate"); //new adjusted Mail-Out Reminder Date as to allow the proper timing for patient response        
                     }
                           
                    else if  (daysDiff > 0) { 
                              document.getElementById("Is_It_Time_For_Reminder").innerHTMl = alert(" PAST DUE !!! Send Out Reminder A.S.A.P.!!! - Past Due as of : " + mailOutReminder);  
                     }

                    else if ((mailOutDate.getTime())> (currentDate.getTime())) {
                        var adjustedMailOutDate = new Date(mailOutDate);
                        adjustedMailOutDate.setDate(adjustedMailOutDate.getDate() - daysDiff);
                        document.getElementById("Its_Not_Time").innerHTML = alert("It's NOT Time To Mail-Out Reminder");

                  }
                  
                }
            
            
            
        
        