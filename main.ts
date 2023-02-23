let play = 0
let song = 0
music.stopAllSounds()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        song += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        song += -1
    }
})
basic.forever(function () {
    if (play == 1 && song == 1) {
        basic.showString("Rickroll")
    }
})
basic.forever(function () {
    if (play == 1) {
        if (song == 1) {
            music.playMelody("C D F D G G - G ", 500)
            music.playMelody("- F F - C D F D ", 500)
            music.playMelody("F F - F - E E - ", 500)
            music.playMelody("C D F D F F F - ", 500)
            music.playMelody("G G - E E E D C ", 500)
            music.playMelody("C - C - G G F F ", 500)
            music.playMelody("F F - - - - - - ", 500)
        }
    }
})
