// BURGER

const nav = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");

const handleNav = () => {
	nav.classList.add("nav--active");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
};

navBtn.addEventListener("click", handleNav);

// FORM

const username = document.querySelector("#username");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const textarea = document.querySelector("#textarea");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");


const showError = (input,msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text')

    formBox.classList.add('error')
    errorMsg.textContent = msg;
    
}


const clearError = (input) => {
    const formBox = input.parentElement;
    formBox.classList.remove('error')
    
}




const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === "") {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};


const checkLength =(input,min) => {
    if(input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0,-1)} musi składać się z min. ${min} znaku`)
    }
}

const checkMail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, 'E-mail jest niepoprawny')
    }
}

sendBtn.addEventListener("click", (e) => {
	e.preventDefault();

	checkForm([username, surname, textarea, email]);
    checkLength(username,1)
    checkLength(surname,1)
    checkMail(email)
    checkErrors()
});

const checkErrors = () => {
    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0

    allInputs.forEach(el => {
        if(el.classList.contains('error')) {
            errorCount++;
        }
    })

    if(errorCount === 0) {
        popup.classList.add('show-popup')

    }
}

clearBtn.addEventListener("click", (e) => {
	e.preventDefault();

	[username, surname, textarea, email].forEach((el) => {
		el.value = "";
        clearError(el)
	});
});




// CURRENT YEAR 
const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();