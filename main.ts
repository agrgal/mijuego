controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Bola.y += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Bola.x += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Bola.x += -1
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    Bola.vy += 1
    if (Bola.vy > maxV) {
        Bola.vy = maxV
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Bola.y += 1
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    Bola.vx += 1
    if (Bola.vx > maxV) {
        Bola.vx = maxV
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    Bola.vy += -1
    if (Bola.vy < -1 * maxV) {
        Bola.vy = -1 * maxV
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    Bola.vx += -1
    if (Bola.vx < -1 * maxV) {
        Bola.vx = -1 * maxV
    }
})
let maxV = 0
let Bola: Sprite = null
scene.setBackgroundColor(9)
Bola = sprites.create(img`
    . . 6 6 6 6 . . 
    . 6 d 4 4 4 6 . 
    6 1 b 1 1 4 d 6 
    c 1 b b 4 4 1 c 
    . c b b b d c . 
    . . c c c c . . 
    `, SpriteKind.Player)
maxV = 10
tiles.setCurrentTilemap(tilemap`nivel1`)
scene.cameraFollowSprite(Bola)
