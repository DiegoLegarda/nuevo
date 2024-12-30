input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    let _this: midi.MidiController = null
    _this.note(69, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
})
