function showTab(home) {
    var i, tabs;
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
    document.getElementById(home).style.display = "block";
    
    var links = document.getElementsByTagName("a");
    for (i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
  }