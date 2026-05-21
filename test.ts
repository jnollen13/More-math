let _new = moreMath.slopePointAtX(moreMath.slopetodecimal(5,10), 23, 10)
let mySprite = sprites.create(img`
    6 6 6 6
    6 6 6 6
    6 6 6 6
    6 6 6 6
`, SpriteKind.Player)
mySprite.sayText(_new)