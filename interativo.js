var sec = 00
var min = 00
var hour = 00
var interval

function start() {
    interval = setInterval(watch, 1000)
}

function pause() {
    clearInterval(interval)
    
}

function stop() {
    sec = 0
    min = 0
    clearInterval(interval)
    document.getElementById('watch').innerText = '00:00:00'
}

function watch() {
    sec++
    if( sec == 60) {
        min++
        sec = 0
    }else if( min == 60 ){
        hour++
        min = 0
        sec = 0 
    }
    
    document.getElementById('watch').innerText = hour+':'+min+':'+sec
}