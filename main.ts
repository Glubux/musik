let song = 0
let play = 0
music.stopAllSounds()
basic.showString("Wilkommen")
basic.forever(function () {
    if (play == 0 && (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        if (input.buttonIsPressed(Button.A)) {
            if (0 < song) {
                song += -1
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            song += 1
        }
        basic.showString("" + (song))
    }
    if (input.logoIsPressed()) {
        if (play == 0) {
            play = 1
            basic.showLeds(`
                . # . . .
                . # # . .
                . # # # .
                . # # . .
                . # . . .
                `)
        } else {
            play = 0
            music.stopAllSounds()
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
        }
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
        if (song == 2) {
            music.setTempo(165)
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(494, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Sixteenth))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.playTone(494, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(494, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Sixteenth))
            music.playTone(440, music.beat(BeatFraction.Whole))
        }
    }
})
basic.forever(function () {
    if (play == 1 && song == 1) {
        basic.showString("Rickroll")
    }
})
