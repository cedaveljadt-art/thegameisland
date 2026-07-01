function loadAssets(){
    loadFont("pixelFont", "fonts/pxl.ttf")
    loadFont("timerFont", "fonts/timerfont.ttf")
    loadSpriteAtlas("sprites/sprites.png",{
        "player-down":{x:0,y:82,width:16,height:16},
        "player-up":{x:16,y:82,width:16,height:16},
        "player-side":{x:0,y:98,width:32,height:16,sliceX:2,sliceY:1,
            anims:{"run":{from:0,to:1,speed:8}}
        },
        "npc":{x:32,y:98,width:16,height:14}        
    })
    loadSpriteAtlas("sprites/tiles.png",{
    "tile": {x: 0,y: 0,width: 128,height: 128,sliceX: 8,sliceY: 8,
      anims: {
        "bigtree-pt1": 1,
        "bigtree-pt2": 2,
        "bigtree-pt3": 9,
        "bigtree-pt4": 10,
        "grass-m": 14,
        "grass-tl": 17,
        "grass-tm": 18,
        "grass-tr": 19,
        "grass-l": 25,
        "grass-r": 27,
        "grass-bl": 33,
        "grass-mb": 34,
        "grass-br": 35,
        "tree-t": 4,
        "tree-b": 12,
        "grass-water": 20,
        "sand-1": 6,
        "ground-l": 41,
        "ground-m": 42,
        "ground-r": 43,
        "rock-water": 60,
        "ground-door":32,
        "cement":23,
        "bush":26,
        "door":40
      }
    }
    })
    loadSprite("mario","sprites/mario.png", {
    sliceX: 26,
    sliceY: 1,
    anims: {
        idle:{from:8,to:8},
        run: { from: 9, to: 11, loop: true },
        jumpstart: { from: 12, to: 12 },
        jumpend: { from: 13, to: 13 },
        small:{from:0,to:0} 
    }
    })
    loadSprite("shell","sprites/enemiesshell.png", {
        sliceX: 21,
        sliceY: 1,
        anims: {
            run: { from: 19, to: 20, loop: true },
        }
    })
    loadSprite("turtle","sprites/enemies.png", {
        sliceX: 21,
        sliceY: 1,
        anims: {
            run: { from: 3, to: 4, loop: true },
        }
    })
    loadSprite("turtlebomber","sprites/enemies.png", {
        sliceX: 21,
        sliceY: 1,
        anims: {
            run: { from: 14, to: 16, loop: true },
        }
    })
    loadSprite("turtlewalking","sprites/enemies.png", {
        sliceX: 21,
        sliceY: 1,
        anims: {
            run: { from: 9, to: 10, loop: true },
        }
    })
    loadSprite("hammer","sprites/enemies.png", {
        sliceX: 21,
        sliceY: 1,
        anims: {
            run: { from: 13, to: 13, loop: true },
        }
    })
    loadSprite("ship","sprites/spacesheet.png",{
        sliceX:3,
        sliceY:3,
        anims:{
            idle:{from:7,to:7}
        }
    })
    loadSprite("alien1","sprites/spacesheet.png",{
        sliceX:3,
        sliceY:3,
        anims:{
            idle:{from:0,to:1,loop:true,speed:1}
        }
    })
    loadSprite("ground","sprites/ground-tiled.png");
    loadSprite("timergame","sprites/timer1.png")
    loadSprite("arrowbutton","sprites/arrowbutton.png")
    loadSprite("spaceinvadersmachine","sprites/spacemachine.png")
    loadSound("jump","sounds/jump.mp3")
    loadSound("end","sounds/end.mp3")
    loadSound("song","sounds/song.mp3")
    loadSound("throw","sounds/throw.mp3")
}