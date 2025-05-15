let state = false
loops.everyInterval(3600000, function () {
    if (input.lightLevel() >= 50) {
        if (state == true) {
            radio.sendString("toggle off")
            state = false
        }
    } else {
        if (state == false) {
            radio.sendString("toggle on")
            state = true
        }
    }
})
