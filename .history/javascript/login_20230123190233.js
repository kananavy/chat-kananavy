const form = document.querySelector(".login form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form form submitting
}

continueBtn.onclick = ()=>{
// let's start Ajax
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "php/login.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                if(data == "success"){
                    // location.href = "user.php";
                    // // overlay.innerHTML = 'user.php';
                    // // overlay.appendChild(xhr);
                }else
                // { 
                //     // console.log(data);
                //     errorText.textContent = data;
                //     errorText.style.display = "block";
                // }
            console.log("pkpk");
            };

        };
    };
    // we have to send the form date thought ajax to php
    let formData = new FormData(form); //crating new formData Object
    xhr.setRequestHeader("Content-Type", "application/x-www-form encoded"); 
    xhr.send(formData); //Sending the form data to php
};



