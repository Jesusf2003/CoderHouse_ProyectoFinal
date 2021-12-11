$(document).ready(function () {
  $("#sidebar-btn").on("click", function () {
    $("#sidebar").toggleClass("visible");
  });
});

$("#btn").click(function () {
  setTimeout(showTooltip, 0);
});

function showTooltip() {
  $("#message").show("slow");
  setTimeout(hideTooltip, 5000);
}

function hideTooltip() {
  $("#message").hide("slow");
}