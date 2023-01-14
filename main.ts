scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.wawawawaa.play()
    game.showLongText("Terminaste. Has conseguido " + info.score() + "Puntos", DialogLayout.Full)
    game.over(true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Bola.vy += 1
    if (Bola.vy > maxV) {
        Bola.vy = maxV
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Bola.vx += 1
    if (Bola.vx > maxV) {
        Bola.vx = maxV
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    music.knock.play()
    info.changeScoreBy(-1)
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    Bola.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Bola.vx += -1
    if (Bola.vx < -1 * maxV) {
        Bola.vx = -1 * maxV
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Bola.vy += -1
    if (Bola.vy < -1 * maxV) {
        Bola.vy = -1 * maxV
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    Bola.vy = 0
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    Bola.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    Bola.vy = 0
})
let maxV = 0
let Bola: Sprite = null
info.setScore(2000)
scene.setBackgroundColor(9)
Bola = sprites.create(img`
    . . 6 6 6 6 . . 
    . 6 d 4 4 4 6 . 
    6 1 b 1 1 4 d 6 
    c 1 b b 4 4 1 c 
    . c b b b d c . 
    . . c c c c . . 
    `, SpriteKind.Player)
Bola.setPosition(70, 120)
maxV = 10
tiles.setCurrentTilemap(tilemap`nivel1`)
tiles.placeOnTile(Bola, tiles.getTileLocation(8, 15))
scene.cameraFollowSprite(Bola)
forever(function () {
    if (info.score() <= 0) {
        game.showLongText("Lo siento. Te has quedado sin puntos", DialogLayout.Full)
        game.over(false)
    }
})
