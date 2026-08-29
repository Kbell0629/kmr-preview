document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    var host = window.location.hostname || "";
    var onNetlify = host === "netlify.app" || host.endsWith(".netlify.app");
    if (!onNetlify) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      if (status) {
        status.hidden = false;
        status.textContent = "Call (716) 479-6412 — this preview form is not connected to an inbox yet.";
        status.focus();
      }
    }
  });
});
