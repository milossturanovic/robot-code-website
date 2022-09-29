

// AOS Animation 
AOS.init();

AOS.init({
  disable: function() {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  }
});



jQuery(document).ready(function( $ ) {
   
   
   // Kontakt forma
  
      if ( $('#contactform').length > 0 ) {
      
        $("#contactform").submit(function(e) {
            e.preventDefault();
            ajaxContact();
        }); 
        function ajaxContact(){
            var url = $('#contactform').prop('action');

            $.ajax({
                   type: "POST",
                   url: url,
                   data: $("#contactform").serialize(),
                   success: function(data)
                   {
                       $('#response-contact').html(data);
                       $('#contactform').hide();
                      
                   }
                 });

              }
         }  
   
   // - kontakt forma

	if($('#canvas').length) {

		var doughnutData = [{
        value: 70,
        color: "#f85c37"
      },
      {
        value: 30,
        color: "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
	};

	if($('#canvas2').length) {
		var doughnutData = [{
				value: 90,
				color: "#f85c37"
			},
			{
				value: 10,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas3').length) {
		var doughnutData = [{
				value: 55,
				color: "#f85c37"
			},
			{
				value: 45,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas4').length) {
		var doughnutData = [{
				value: 55,
				color: "#f85c37"
			},
			{
				value: 45,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(doughnutData);
	}
});





//constants
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const description = document.querySelector(".desc-text");
const formFields = document.querySelector(".radio-section");
const email = document.querySelector(".email");
const company = document.querySelector(".company");
const textArea = document.querySelector(".text-area");
const nameLabel = document.querySelector(".nameLabel");

var mq = window.matchMedia("(max-width: 768px)");
// toggle arrow icon on md size
const toggleFunc = function (id1, id2, id3) {
  if (mq.matches) {
    document.getElementById(id1).classList.toggle("bi-chevron-right");
    document.getElementById(id1).classList.toggle("bi-chevron-down");

    document.getElementById(id2).classList.remove("bi-chevron-down");
    document.getElementById(id2).classList.add("bi-chevron-right");

    document.getElementById(id3).classList.remove("bi-chevron-down");
    document.getElementById(id3).classList.add("bi-chevron-right");
  }
};

//adding/removing classes for right/down arrow :(
const addRemoveClass = function(clas1, clas2,clas3,clas4,clas5,clas6){
  first.classList.add(clas1);
  first.classList.remove(clas2);

  second.classList.add(clas3);
  second.classList.remove(clas4);
  
  third.classList.add(clas5);
  third.classList.remove(clas6);
}

//changing text on button click func
const changeText = function(desc, email, company, textarea){
  description.textContent = desc;
  email.textContent = email;
  company.textContent = company;
  textArea.textContent = textarea;
}

// changing first of the 'Lets talk' fields
first.addEventListener("click", function () {
  
  addRemoveClass("choose","unselect","unselect","choose","unselect","choose");

  formFields.classList.remove("show");
  changeText("Have a new project and think Robot Code would make a great partner? We’d love to hear what’s on your mind.","Business Email Address","Company Name","Tell us about your project (including budget)");
  toggleFunc('favIcon1', 'favIcon2', 'favIcon3');
});


// changing second of the 'Lets talk' fields
second.addEventListener("click", function () {

  addRemoveClass("unselect","choose","choose","unselect","unselect","choose");
  
  formFields.classList.add("show");
  changeText("We understand that great work happens when great people work together. That’s why we’re always looking for the next great person.", "Email Address","Tell us something about you");
  toggleFunc('favIcon2', 'favIcon1', 'favIcon3');
});


// changing third of the 'Lets talk' fields
third.addEventListener("click", function () {

  addRemoveClass("unselect","choose","unselect","choose","choose","unselect");

  formFields.classList.remove("show");
  changeText("Have a question about the agency or just want to hear more about what we do? Drop us a line.", "* Business Email Address", "Company Name","* Message");
  toggleFunc('favIcon3', 'favIcon1', 'favIcon2');
});


// form validation
(function () {
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Hide/show placeholder
$(function () {
  $(".holder + input").keyup(function () {
    if ($(this).val().length) {
      $(this).prev(".holder").hide();
    } else {
      $(this).prev(".holder").show();
    }
  });
  $(".holder").click(function () {
    $(this).next().focus();
  });
});













