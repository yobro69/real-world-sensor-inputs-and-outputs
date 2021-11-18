let Reading = 0
if (pins.digitalReadPin(DigitalPin.P0) == 1) {
    pins.digitalWritePin(DigitalPin.P1, 1)
    while (pins.digitalReadPin(DigitalPin.P0) == 1) {
        music.playMelody("D E D E D D E E ", 150)
    }
}
basic.forever(function () {
    Reading = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(Reading)
    if (Reading == 1) {
        pins.digitalWritePin(DigitalPin.P6, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P6, 0)
    }
})
