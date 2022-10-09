radio.setGroup(42)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        basic.showArrow(ArrowNames.North)
        radio.sendString("fore")
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        basic.showArrow(ArrowNames.South)
        radio.sendString("aft")
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        basic.showArrow(ArrowNames.West)
        radio.sendString("left")
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("right")
        basic.showArrow(ArrowNames.East)
    } else if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendString("stop")
        basic.showIcon(IconNames.No)
    }
})
