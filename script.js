let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

var modal = document.getElementById("myModal");
var btns = document.getElementsByClassName("btn");
var span = document.getElementsByClassName("close")[0];

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    modal.style.display = "block";
  };
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

(function () {
  emailjs.init("VuLT51HHpG5LZDnnl");
})();

function deleteMessageError(input) {
  const checkMessage = input.nextElementSibling;
  if (input.value.trim() !== "") {
    checkMessage.style.display = "none";
  } else {
    checkMessage.style.display = "block";
  }
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    if (isValid) {
      var templateParams = {
        to_name: "xyz",
        from_name: "The Apartment",
        message_html: "Please Find out the attached file",
        user_name: name.value.trim(),
        user_email: email.value.trim(),
        user_message: message.value.trim(),
      };

      emailjs.send("service_tblmpac", "template_to4e66a", templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
    }
  });

document
  .querySelector(".leftPageForm .form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const checkIn = document.querySelector('input[id="calendar"]');
    const checkInError = checkIn.nextElementSibling;
    if (checkIn.value.trim() === "") {
      checkInError.style.display = "block";
      isValid = false;
    } else {
      checkInError.style.display = "none";
    }

    const checkOut = document.querySelectorAll('input[id="calendar"]')[1];
    const checkOutError = checkOut.nextElementSibling;
    if (checkOut.value.trim() === "") {
      checkOutError.style.display = "block";
      isValid = false;
    } else {
      checkOutError.style.display = "none";
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });

const navbarIcon = document.getElementById("navbarIcon");
const leftPage = document.querySelector(".leftPage");

navbarIcon.addEventListener("click", function () {
  leftPage.classList.toggle("showLeftPage");
});

var closeBtn = document.querySelector(".closeNavbar");
closeBtn.addEventListener("click", closeNavbar);

function closeNavbar() {
  leftPage.classList.remove("showLeftPage");
}

const subEmailInput = document.getElementById("sub_email");

subEmailInput.addEventListener("keyup", function () {
  deleteSubscribeError(subEmailInput);
});

const subscribe2Btn = document.querySelector(".subscribe2");

subscribe2Btn.addEventListener("click", function () {
  emailError.style.display = "block";
});

const emailInput = document.getElementById("sub_email");
const emailError = document.querySelector(".checkEmails");

emailInput.addEventListener("keyup", function () {
  if (!validateEmail(emailInput.value.trim())) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "none";
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

subscribe2Btn.addEventListener("click", function (event) {
  event.preventDefault();

  if (!validateEmail(subEmailInput.value.trim())) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    alert("Subscribed successfully!");
  }
});

subEmailInput.addEventListener("keyup", function () {
  if (validateEmail(subEmailInput.value.trim())) {
    emailError.style.display = "none";
  }
});

function validateAndSubmit() {
  const name = document.getElementById("name");
  const nameError = name.nextElementSibling;
  const email = document.getElementById("email");
  const emailError = email.nextElementSibling;
  const message = document.getElementById("message");
  const messageError = message.nextElementSibling;

  let isValid = true;

  if (name.value.trim() === "") {
    nameError.style.display = "block";
    nameError.innerText = "This field is required";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  if (email.value.trim() === "") {
    emailError.style.display = "block";
    emailError.innerText = "This field is required";
    isValid = false;
  } else if (!validateEmail(email.value.trim())) {
    emailError.style.display = "block";
    emailError.innerText = "Email is not valid";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  if (message.value.trim() === "") {
    messageError.style.display = "block";
    messageError.innerText = "This field is required";
    isValid = false;
  } else {
    messageError.style.display = "none";
  }

  if (isValid) {
    alert("Message sent successfully!");

    name.value = "";
    email.value = "";
    message.value = "";

    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
  }
}

document
  .querySelector(".messageBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    validateAndSubmit();
  });

document
  .querySelector(".leftPageForm .form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const checkIn = document.querySelector('input[id="calendar"]');
    const checkInError = checkIn.nextElementSibling;
    const checkInValue = checkIn.value.trim();
    if (checkInValue === "") {
      checkInError.style.display = "block";
      return;
    } else if (!isValidDateFormat(checkInValue)) {
      checkInError.style.display = "block";
      checkInError.textContent = "Format is not valid";
      return;
    } else {
      checkInError.style.display = "none";
    }

    const checkOut = document.querySelectorAll('input[id="calendar"]')[1];
    const checkOutError = checkOut.nextElementSibling;
    const checkOutValue = checkOut.value.trim();
    if (checkOutValue === "") {
      checkOutError.style.display = "block";
      return;
    } else if (!isValidDateFormat(checkOutValue)) {
      checkOutError.style.display = "block";
      checkOutError.textContent = "Format is not valid";
      return;
    } else {
      checkOutError.style.display = "none";
    }

    const inputs = document.querySelectorAll(".leftPageForm .form input");
    inputs.forEach((input) => {
      input.value = "";
    });

    this.submit();
  });

function isValidDateFormat(dateString) {
  const regex = /^\d{8}$/;
  return regex.test(dateString);
}
