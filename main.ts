basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        music.playTone(131, music.beat(BeatFraction.Half))
        basic.pause(1000)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(1000)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        music.playTone(523, music.beat(BeatFraction.Half))
        basic.pause(1000)
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        music.playTone(784, music.beat(BeatFraction.Half))
        basic.pause(1000)
    }
})
