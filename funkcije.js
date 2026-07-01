function makeTile(type){
        return[
            sprite("tile"),
            {type}
        ]
    }
    function createIsland(){
        return [
        addLevel(
        [
            "                 ",
            " cddddddddddddddddddddddddddde  ",
            " 30000000000000000000000000002 ",
            " 30000000000000002000000000002  ",
            " 30000000000000002000000000002  ",
            " 30030000008888889000000000002  ",
            " 300300000244f4445000000000002  ",
            " 300a8888897777777777777770002  ",
            " 30064444457777777777777700002  ",
            " 30000000000000007777777000002  ",
            " 30000000021111130000000000002  ",
            " 3000000002     11130000000002 ",
            " 1111111111        11113000002   ",
            "      b          b     1300002",
            "     b      b           111111     ",
            " b             b       b",
        ],
        {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
            "0": () => makeTile("grass-m"),
            "1": () => makeTile("grass-water"),
            "2": () => makeTile("grass-r"),
            "3": () => makeTile("grass-l"),
            "4": () => makeTile("ground-m"),
            "5": () => makeTile("ground-r"),
            "6": () => makeTile("ground-l"),
            "7": () => makeTile("sand-1"),
            "8": () => makeTile("grass-mb"),
            "9": () => makeTile("grass-br"),
            "a": () => makeTile("grass-bl"),
            "b": () => makeTile("rock-water"),
            "c": () => makeTile("grass-tl"),
            "d": () => makeTile("grass-tm"),
            "e": () => makeTile("grass-tr"),
            "f": () => makeTile("ground-door")
            },
        }
        ),
        addLevel(
        [
            "      12               ",
            "      34                   12   ",
            "      0     12             34",
            "     0      34 ",
            "              ",
            "           ",
            "           5            5   ",
            "           6            6  ",
            "     5                   ",
            "     6   0               ",
            "                           12  ",
            "                        0  34  ",
            "               ",
        ],
        {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
            "0": () => makeTile(),
            "1": () => makeTile("bigtree-pt1"),
            "2": () => makeTile("bigtree-pt2"),
            "3": () => makeTile("bigtree-pt3"),
            "4": () => makeTile("bigtree-pt4"),
            "5": () => makeTile("tree-t"),
            "6": () => makeTile("tree-b"),
            },
        }
        ),
        addLevel(
        [
        " 00000000000000000000000000000 ",
        "0     11                   11 0",
        "0           11             11 0",
        "0           11    4           0",
        "0                 4           0",
        "0   2             4           0",
        "0   2      3353333      0     0",
        "0   2      0            0     0",
        "0   3333333                   0",
        "0    0                        0",
        "0          00000           11 0",
        "0          0    000        11 0",
        " 0000000000        0000       0",
        "                       0      0 ",
        "                        0000000   "
        ],
        {
        tileWidth: 16,
        tileHeight: 16,
        tiles: {
          "0": () => [
            area({ shape: new Rect(vec2(0), 16, 16) }),
            body({ isStatic: true }),
          ],
          "1": () => [
            area({
              shape: new Rect(vec2(0), 8, 8),
              offset: vec2(4, 2),
            }),
            body({ isStatic: true }),
          ],
          "2": () => [
            area({ shape: new Rect(vec2(0), 2, 16) }),
            body({ isStatic: true }),
          ],
          "3": () => [
            area({
              shape: new Rect(vec2(0), 16, 20),
              offset: vec2(0, -4),
            }),
            body({ isStatic: true }),
          ],
          "4": () => [
            area({ shape: new Rect(vec2(0), 2, 16),offset:vec2(-2,0) }),
            body({ isStatic: true }),
          ],
          "5": () => [
            area({
              shape: new Rect(vec2(0), 16, 20),
              offset: vec2(0, -4),
            }),
            body({ isStatic: true }),
            "gameroomdoor"
          ]
        },
      }
    )
        ]
    }
function createGameRoom(){
    return [
        addLevel([         
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddd"
        ],{
            tileWidth:16,
            tileHeight:16,
            tiles:{
                "d": () => makeTile("grass-m")
            },
            pos:vec2(-100,-600) 
        }),
        addLevel([
            "dddddddddddddddddddddddddddddddddd",
            "d111111111111ddddddddddddddddd",
            "d111111111111ddddddddddddddddd",
            "d111111111111ddddddddddddddddd",
            "d111111111111ddddddddddddddddd",
            "d111111111111ddddddddddddddddd",
            "d111111111111ddddddddddddddddd",
            "d111111111111ddddddddddddddddd",
            "d111111111111ddddddddddddddddd",
            "d111111111111ddddddddddddddddd",
            "d111111111111ddddddddddddddddd",
            "ddddddd1dddddddddddddddddddddddddd"
        ],{
            tileWidth:16,
            tileHeight:16,
            tiles: {
                "0": () => makeTile("ground-m"),
                "1": () => makeTile("cement"),
                "2": () => makeTile("grass-mb"),
                "3": () => makeTile("grass-br"),
                "4": () => makeTile("grass-bl"),
                "5": () => makeTile("grass-tl"),
                "6": () => makeTile("grass-tm"),
                "7": () => makeTile("grass-tr"),
                "8": () => makeTile("grass-r"),
                "9": () => makeTile("grass-l"),
                "a": () => makeTile("ground-m"),
                "b": () => makeTile("ground-r"),
                "c": () => makeTile("ground-l"),
                "d": () => makeTile("grass-m"),
                "e": ()=> makeTile("bush")
            },
            pos:vec2(350,-170)
        }),
        addLevel([
            "eeeeeeeeeeeeee",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "eeeeeeedeeeeee"
        ],{
            tileWidth:16,
            tileHeight:16,
            tiles:{
                "e": () => makeTile("bush"),
                "d": () => makeTile("door")
            },
            pos:vec2(350,-170) 
        }),
        addLevel([
            "eeeeeeeeeeeeee",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "e            e",
            "eeeeeedeeeeeee"
        ],{
            tileWidth:16,
            tileHeight:16,
            tiles:{
              "e": () => [
                area({ shape: new Rect(vec2(0), 16, 16) }),
                body({ isStatic: true }),
              ],
              "d": () => [
                area({ shape: new Rect(vec2(0), 16, 16) }),
                body({ isStatic: true }),
                "islanddoor"
              ]
            },
            pos:vec2(350,-170) 
        })
    ]
}
function useMap(funkcija){
    if (useMap.current) {
        for (const layer of useMap.current) {
            destroy(layer)
        }
    }
    const layers = typeof funkcija === "function" ? funkcija() : funkcija
    useMap.current = layers
    for (const layer of useMap.current) {
        layer.use(scale(3.5))
        for (const tile of layer.children) {
            if (tile.type) {
                tile.play(tile.type)
            }
        }
    }
    return useMap.current
}
function dialogue(player, worldState,d1,d2,isgame,game,uslov){
        player.dialogue=true
        const dialogueBoxFixedContainer=add([fixed(),z(999)])
        const dialogueBox=dialogueBoxFixedContainer.add([
          rect(880,190),
          outline(5),
          pos(80,300),
          fixed(),
          z(1000)
        ])
        const content=dialogueBox.add([
          text('',{size:36,width:870,lineSpacing:15}),
          color(10,10,10),
          pos(20,20),
          fixed(),
          z(1001)
        ])
        if(uslov){
          content.text=d1
        }
        else{
          content.text=d2
        }
        upd=onUpdate(()=>{
          worldState.playerPosX=player.pos.x
          worldState.playerPosY=player.pos.y
          if(isKeyDown("space") || isKeyDown("enter")){
            destroy(dialogueBox)
            player.dialogue=false
          }
          if(isgame && isKeyDown("e")){
            console.log(worldState)
            destroy(dialogueBox)
            upd.cancel()
            player.dialogue=false
            worldState.playerPosX-=10
            worldState.playerPosY+=10
            go(game,worldState)
          }
        })
}
function disable(obj){
  if (obj.disabled) return
    obj.savepos = vec2(obj.pos.x, obj.pos.y)
    obj.pos = vec2(-100000, -100000)
    obj.disabled=true
}
function enable(obj){
    if (!obj.disabled) return
    if (obj.savepos) {
      obj.pos = vec2(obj.savepos.x, obj.savepos.y)
    }
    if (typeof obj.hidden !== "undefined") obj.hidden = false
    obj.disabled = false
}