document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("enquiryForm");
  const success = document.getElementById("success");
  if (form && success) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      success.style.display = "block";
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});
