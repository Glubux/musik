play = 0
song = 0
music.stop_all_sounds()

def on_forever():
    global song
    if input.button_is_pressed(Button.A):
        song += 1
    if input.button_is_pressed(Button.B):
        song += -1
basic.forever(on_forever)

def on_forever2():
    if play == 1 and song == 1:
        basic.show_string("Rickroll")
basic.forever(on_forever2)

def on_forever3():
    if play == 1:
        if song == 1:
            music.play_melody("C D F D G G - G ", 500)
            music.play_melody("- F F - C D F D ", 500)
            music.play_melody("F F - F - E E - ", 500)
            music.play_melody("C D F D F F F - ", 500)
            music.play_melody("G G - E E E D C ", 500)
            music.play_melody("C - C - G G F F ", 500)
            music.play_melody("F F - - - - - - ", 500)
basic.forever(on_forever3)
