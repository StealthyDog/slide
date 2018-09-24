var allButtons = $('#buttons > span')
for(let i=0; i<allButtons.length; i++){
  $(allButtons[i]).on('click', function(x){
    var index = $(x.currentTarget).index()
    var p = index * -500
    $('#images').css({
      transform: 'translate('+p+'px)'
    })
    n = index
    activeButton(allButtons.eq(n))
  })
}

var n = 0
var size = allButtons.length
allButtons.eq(n % size).trigger('click')

var timer = setTimer()
function setTimer(){
  return setInterval(function(){
        n+=1
        allButtons.eq(n % size).trigger('click')
          .addClass('red')
          .siblings('.red').removeClass('red')
        },3000)
}

function activeButton($button){
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}

$('.window').on('mouseenter',function(){
  window.clearInterval(timer)
})

$('.window').on('mouseleave',function(){
  timer = setTimer()
})