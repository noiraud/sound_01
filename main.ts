input.onPinPressed(TouchPin.P0, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P2, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P1, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
basic.forever(function () {
	
})
