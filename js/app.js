    !(function (o, c) {
      var n = c.documentElement,
        t = " w-mod-";
      (n.className += t + "js"),
        ("ontouchstart" in o ||
          (o.DocumentTouch && c instanceof DocumentTouch)) &&
        (n.className += t + "touch");
    })(window, document);

var charmeeCardMouseover = (e) => {
  e.target.classList.toggle('flip-vertical-left')
  setTimeout(() => {
    let a = document.querySelector('.charmee-card-front')
    let b = document.querySelector('.charmee-card-back')
    a.style.zIndex = 10
    b.style.zIndex = 20
    console.log(a, b)
  }, 200)
}