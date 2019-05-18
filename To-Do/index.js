var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendPlan);

function appendPlan() {
  var exercise = $('.exercise').val();
  var sets = $('.sets').val();
  var reps = $('.reps').val();
  var weight = $('.weight').val();

  cardContainer.append(`
    <div class="name-card">${exercise}: ${sets} sets of ${reps} at ${weight} lbs
    <button type="button" class="box"> </button></div>
  `);
  $('.exercise').val("");
  $('.sets').val("");
  $('.reps').val("");
  $('.weight').val("");

  // var box = ${'.box'};
  // box.on("click", takeAway);

}

 function takeAway(){
 event.target.parentNode.remove();
 }
