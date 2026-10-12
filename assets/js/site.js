(function () {
  var b = document.querySelector('.burger'), m = document.getElementById('menu')
  if (b && m) b.addEventListener('click', function () { var o = m.classList.toggle('open'); b.setAttribute('aria-expanded', o) })
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); f.classList.add('sent'); var t = f.nextElementSibling; if (t && t.focus) { t.tabIndex = -1; t.focus() } })
  })
})()
