basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . . . # #
    . . # # #
    `)
basic.pause(1000)
basic.showLeds(`
    . . . # #
    . . # # #
    . # # # #
    # # # # #
    # # # # #
    `)
basic.pause(1000)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    `)
basic.forever(function () {
    serial.writeLine("Intensite lumineuse")
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    basic.pause(1000)
    serial.writeLine("Temperature")
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    basic.pause(1000)
    serial.writeLine("Champ magnetique")
    serial.writeNumber(input.magneticForce(Dimension.X))
    serial.writeLine("")
    basic.pause(1000)
})
