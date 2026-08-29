document.addEventListener("DOMContentLoaded", function () {
  var section = document.getElementById("work");
  if (!section) return;
  var figs = Array.prototype.slice.call(section.querySelectorAll("figure"));
  var pending = figs.length;
  var shown = 0;
  function check(fig, img, ok) {
    pending -= 1;
    if (!ok || img.naturalWidth < 400) {
      fig.remove();
    } else {
      shown += 1;
    }
    if (pending === 0 && shown > 0) section.hidden = false;
  }
  figs.forEach(function (fig) {
    var img = fig.querySelector("img");
    if (!img) { pending -= 1; return; }
    if (img.complete) {
      check(fig, img, img.naturalWidth > 0);
    } else {
      img.addEventListener("load", function () { check(fig, img, true); });
      img.addEventListener("error", function () { check(fig, img, false); });
    }
  });
});
