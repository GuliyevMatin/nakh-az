$(() => {
  moment.locale("az");
  function getProgress() {
    var sPageURL = window.location.pathname;

    let progress = $(".progress-bar");
    for (const item of progress) {
      if (
        item.getAttribute("aria-label").toLowerCase().trim() ===
        sPageURL.toLowerCase().trim()
      ) {
        item.classList.add("selectProgress");
      } else {
        item.classList.remove("selectProgress");
      }
    }
  }

  getProgress();

  $(".header-date").text(moment().format('LLL'))


  $(window).resize(function() {
    
    if (window.innerWidth < 990) {
      $(".progress").hide();
    }
    else{
    $(".progress").show();

    }
    

  })
  if (window.innerWidth < 990) {
    $(".progress").hide();
    
  }
  else{
    $(".progress").show();


  }
});
