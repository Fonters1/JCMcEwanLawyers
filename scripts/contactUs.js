document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById("contactSubmitButton");
    
    if (submitButton) {
        submitButton.addEventListener("click", function (e) {
            e.preventDefault();

            const name = encodeURIComponent(document.getElementById("name").value.trim());
            const email = encodeURIComponent(document.getElementById("email").value.trim());
            const phone = encodeURIComponent(document.getElementById("number").value.trim());
            const message = encodeURIComponent(document.getElementById("content").value.trim());

            if (!name || !email || !message) {
                alert("Please fill out all required fields (Name, Email, and Message).");
                return;
            }

            const mailtoLink = `mailto:mcewanlawyers@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0AEmail:%20${email}%0APhone:%20${phone}%0AMessage:%20${message}`;

            window.location.href = mailtoLink;
        });
    } else {
        console.error("Submit button not found");
    }
});