 function get_Date() {
    var today = new Date();

 if (18 > today.getHours() && today.getHours() > 12) {
    document.getElementById("Greeting").innerHTML = "Good Afternoon!! Let's get our Yearly Eye Exams Scheduled to make sure our Patients stay Well !!!";
    }
    else if  (12 > today.getHours() && today.getHours() >= 0) {
       document.getElementById("Greeting").innerHTML = "Good Morning!! Today Is a great day to send out reminders for  Yearly Eye Exams, because Well-Ness Checks are a key factor when it comes to happy, healthy, and active Patients !!!";
}
else (18 < today.getHours() && today.getHours() >=23){
        document.getElementById("Greeting").innerHTML = "What a great day...tomorrow we will contact any patients that were sent Reminders 14 days ago if no R.S.V.P(no response has been recorded of file)... It is NOT uncommon for people have a hard time making appointments with their healthcare providers and many find the whole process of dealing with any aspect of their health and medical issues makes them anxious and uncomfortable. This is a major concern for healthcare providers, as this avoidance can lead to missed appointments and delays in necessary treatment. A  little compassion and a friendly voice can go a long way... and sometimes a phone call can make a huge impact when it comes to easing those feelings of dread and anxiety that can often be a result of thinking asbout the doctor's office. the difference - You can be that voice and makes a difference !";
}
        console.log(today.getHours());
