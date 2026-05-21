let _new = moreMath.geometricSequences(1, 3, 2)
let mySprite = sprites.create(img`
    6 6 6 6
    6 6 6 6
    6 6 6 6
    6 6 6 6
`, SpriteKind.Player)
mySprite.sayText(_new)