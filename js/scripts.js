window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let vote = document.getElementById("voteInfo");
    vote.setAttribute("class", "hidden");
    let minor = document.getElementById("minorInfo");
    minor.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age >= 18) {
      vote.removeAttribute("class");
    }
    else {
      minor.removeAttribute("class");
    }
  };
};