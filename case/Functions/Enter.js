document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const NameInput = document.getElementById("Name-id");
        const EmailInput = document.getElementById("Email-id");
        const MessageInput = document.getElementById("Message-id");
        const LanguageInput = document.getElementById("Language-id");
        const PhoneInput = document.getElementById("Phone-id");
        const DurationInput = document.getElementById("Duration-id");
        const AcademicInput = document.getElementById("Academic-id");

        if(NameInput.value.trim() === '' || 
           EmailInput.value.trim() === '' || 
           MessageInput.value.trim() === '' || 
           LanguageInput.value.trim() === '' || 
           PhoneInput.value.trim() === '' || 
           DurationInput.value === 'Duration (Weekly)*' || 
           AcademicInput.value.trim() === '') {
            
            alert('Please fill all required fields!')

        } else {
            alert("Your registration has been completed successfully.")
            form.reset();
        }
    });

    
});