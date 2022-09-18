let locate = document.getElementById("locate")
let helps = document.getElementById("helps")
const heplCenter = document.getElementById("help-centre")
const searchBar = document.getElementById("search")
const searchForm = document.getElementById("show-form")
const closeSearch = document.getElementById("close-search")
const hoverItem = document.getElementById("prof")
const profileListItem = document.getElementsByClassName("profile")
const profileList = document.getElementsByClassName("profile-list")
const profileListHolder = document.getElementById("profile-list-holder")
function closeSearchBar() {
  searchForm.style.display = "none"
}
searchBar.onclick = function() {
  searchForm.style.display = "flex"
}
heplCenter.onclick = function() {
  helps.style.display = "flex"
}
function showFlagList() {
    let flagList = document.getElementsByClassName("flag-list")
    flagList[0].style.display = "block"
}
function LocateList() {
  locate.style.display = "block"
}

window.onclick = function(event) {
    let flagLists = document.getElementById("bros")
    let showIt = document.getElementById("shown")
      if(flagLists == event.target || flagLists.contains(event.target) == false && showIt.contains(event.target) == false) {
        flagLists.style.display = "none"
      }  
      const locateHolder = document.getElementsByClassName("locator-item")[0]  
      if(!locateHolder.contains(event.target)) {
        locate.style.display = "none"
      }
      if(!heplCenter.contains(event.target)) {
        helps.style.display = "none"
      }
}

hoverItem.onmouseover = function(event) {
  if(event.target == profileListItem[1]) {
    profileListHolder.style.display = "block"
    profileList[0].style.display = "block"
    profileList[2].style.display = "none"
    profileList[3].style.display = "none"
    profileList[1].style.display = "none"
  }
  else if(event.target == profileListItem[2]) {
    profileListHolder.style.display = "block"
    profileList[1].style.display = "block"
    profileList[2].style.display = "none"
    profileList[3].style.display = "none"
    profileList[0].style.display = "none"
  }
  else if(event.target == profileListItem[3]) {
    profileListHolder.style.display = "block"
    profileList[2].style.display = "block"
    profileList[3].style.display = "none"
    profileList[1].style.display = "none"
    profileList[0].style.display = "none"
  }
  else if(event.target == profileListItem[4]) {
    profileListHolder.style.display = "block"
    profileList[3].style.display = "block"
    profileList[2].style.display = "none"
    profileList[1].style.display = "none"
    profileList[0].style.display = "none"
  } else {
    profileListHolder.style.display = "none"
    profileList[2].style.display = "none"
    profileList[3].style.display = "none"
    profileList[1].style.display = "none"
    profileList[0].style.display = "none"
  }
}
window.onmouseover = function(event) {
  if(hoverItem.contains(event.target) == false && profileListHolder.contains(event.target) == false) {
    profileListHolder.style.display = "none"
    profileList[2].style.display = "none"
    profileList[3].style.display = "none"
    profileList[1].style.display = "none"
    profileList[0].style.display = "none"
  }
}

window.onscroll = function() {
  const testDiv = document.getElementById("the-hidden-div").getBoundingClientRect()
  const displayClasses = document.getElementsByClassName("under-logic")
  const preferredHolder = document.getElementById("preferred-holder")
  const interests = document.getElementsByClassName("stat")
  if(testDiv.top > -testDiv.height && testDiv.top < 0) {
    preferredHolder.style.display = "block"
  } else {
    preferredHolder.style.display = "none"
  }
  for(let i = 0; i < displayClasses.length; i++) {
    let d = displayClasses[i].getBoundingClientRect().top
    let e = displayClasses[i].clientHeight
    if(d > -e && d < 0) {
      interests[i].style.boxShadow = "1px 1px 5px 2px gray"
      interests[i].style.boxShadow = "-1px -1px -5px -2px gray"
    } else {
      interests[i].style.boxShadow = "none"
    }
}
}