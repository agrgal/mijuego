scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.jumpUp.play()
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    vBala[0] = Bola.vx * 3
    vBala[1] = Bola.vy * 3
    bala = sprites.createProjectileFromSprite(img`
        . . . . 
        . 5 5 . 
        . 5 5 . 
        . . . . 
        `, Bola, vBala[0], vBala[1])
    music.pewPew.play()
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 200)
    info.changeScoreBy(100)
    music.magicWand.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 200)
    info.changeScoreBy(-50)
    music.baDing.play()
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    Bola.vy = 0
})
let VYenemy = 0
let VXenemy = 0
let coche: Sprite = null
let bala: Sprite = null
let Bola: Sprite = null
let vBala: number[] = []
let maxV = 0
info.setScore(2000)
maxV = 10
vBala = [0, 0]
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
tiles.setCurrentTilemap(tilemap`nivel1`)
tiles.placeOnTile(Bola, tiles.getTileLocation(8, 15))
scene.cameraFollowSprite(Bola)
game.showLongText("¡Hola! Este juego se llama \"METABOLA\" Una nave en forma de bola debe ir por la carretera desde la zona inferior hasta la meta (zona roja). La nave se mueve con los cursores. Deja pulsado para mantener el rumbo. Al iniciar el juego tienes 2000 puntos. Si abandonas la carretera empezarás a perder puntos. Los monstruos enemigos aparecerán por la pantalla. Si te toca un enemigo perderás 50 puntos. Si disparas y matas un enemigo sumarás 100. Se dispara con la barra espaciadora. ¿Llegarás a la meta? ¿Con cuántos puntos? Si te quedas a cero, pierdes.", DialogLayout.Bottom)
game.onUpdateInterval(1000, function () {
    coche = sprites.create(assets.image`mipropio`, SpriteKind.Enemy)
    coche.changeScale(0.2, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(coche, assets.tile`myTile`)
    VXenemy = Bola.vx * -1 + randint(-1, 1)
    VYenemy = Bola.vy * -1 + randint(-1, 1)
    coche.setVelocity(VXenemy, VYenemy)
})
forever(function () {
    if (info.score() <= 0) {
        music.wawawawaa.play()
        game.showLongText("Lo siento. Te has quedado sin puntos", DialogLayout.Full)
        game.over(false)
    }
})
