var allButtons = $('#buttons > span')
for(let i=0; i<allButtons.length; i++){
  $(allButtons[i]).on('click', function(x){
    var index = $(x.currentTarget).index()
    var p = index * -500
    $('#images').css({
      transform: 'translate('+p+'px)'
    })
    n = index
    allButtons.eq(n)
      .addClass('red')
      .siblings('.red').removeClass('red')
  })
}

var n = 0
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
  .addClass('red')
.siblings('.red').removeClass('red')

var timer = setInterval(function(){
  n+=1
  allButtons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
},3000)

$('.window').on('mouseenter',function(){
  window.clearInterval(timer)
})

$('.window').on('mouseleave',function(){
  timer = setInterval(function(){
  n+=1
  allButtons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
  },3000)
})