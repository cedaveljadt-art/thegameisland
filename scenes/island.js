function setWorld(worldState){
    setBackground(Color.fromHex("#36A6E0"))
    setGravity(0)
    let helpnpc=add([
      sprite("npc"),
      pos(700,260),
      scale(3.5),
      area(),
      body({ isStatic: true }),
      z(10),
      "helpnpc"
    ])
    let timergame=add([
        sprite("timergame"),
        area(),
        body({isStatic:true}),
        scale(3.5),
        pos(500,-200),
        z(10),
        "timergame"
    ])
    let spaceinvaders=add([
      sprite("spaceinvadersmachine"),
      area({
        shape: new Rect(vec2(0), 230, 370),
        offset: vec2(130, 50),
      }),
      body({isStatic:true}),
      scale(0.35),
      pos(760,-230),
      z(10),
      "spaceinvaders"
    ]) 
    if(!worldState){
      worldState={
        playerPosX:500,
        playerPosY:250,
        gamesbeaten:[],
        location:createIsland
      }
    }
    useMap(worldState.location)
    if(worldState.location === createGameRoom){
      disable(helpnpc)
      enable(spaceinvaders)
    } else {
      enable(helpnpc)
      disable(spaceinvaders)
    }
    if(worldState.location === createGameRoom){
      enable(timergame)
    } else {
      disable(timergame)
    }
    let marionpc=add([
      sprite("mario"),
      pos(1500,100),
      scale(3.5),
      area(),
      body({isStatic:true}),
      z(10),
      "marionpc"
    ])
    if(worldState.location === createGameRoom){
      disable(marionpc)
    }
    marionpc.flipX=true
    const player = add([
      sprite("player-down"),
      pos(500, 250),
      scale(3.5),
      area(),
      body(),
      z(10),
      {
        current: "player-down",
        speed: 210,
        dialogue: false,
      }
    ])
    framecount=0
    onUpdate(()=>{
      camPos(player.pos)
      framecount++
      if((isKeyDown("up") || isKeyDown("down") || isKeyDown("w") || isKeyDown("s")) && framecount%10==0 && !player.dialogue){
        player.flipX=!player.flipX
      }
    })
    function setSprite(player,spriteName){
      if (player.current !== spriteName) {
        player.use(sprite(spriteName))
        player.current = spriteName
      }
    }
    onUpdate(()=>{
      if((isKeyDown("down") || isKeyDown("s")) && (isKeyDown("right") || isKeyDown("d"))){
        if(player.dialogue) return
        player.flipX=true
        if(player.curAnim()!=="run"){
          setSprite(player,"player-side")
          player.play("run")
        }
        player.move(player.speed/1.3,player.speed/1.3)
      }
      else if((isKeyDown("down") || isKeyDown("s")) && (isKeyDown("left") || isKeyDown("a"))){
        if(player.dialogue) return
        player.flipX=false
        if(player.curAnim()!=="run"){
          setSprite(player,"player-side")
          player.play("run")
        }
        player.move(-player.speed/1.3,player.speed/1.3)
      }
      else if((isKeyDown("up") || isKeyDown("w")) && (isKeyDown("left") || isKeyDown("a"))){
        if(player.dialogue) return
        player.flipX=false
        if(player.curAnim()!=="run"){
          setSprite(player,"player-side")
          player.play("run")
        }
        player.move(-player.speed/1.3,-player.speed/1.3)
      }
      else if((isKeyDown("up") || isKeyDown("w")) && (isKeyDown("right") || isKeyDown("d"))){
        if(player.dialogue) return
        player.flipX=true
        if(player.curAnim()!=="run"){
          setSprite(player,"player-side")
          player.play("run")
        }
        player.move(player.speed/1.3,-player.speed/1.3)
      }
      else if(isKeyDown("down") || isKeyDown("s")){
        if(player.dialogue) return
        setSprite(player,"player-down")
        player.move(0,player.speed)
      }
      else if(isKeyDown("up") || isKeyDown("w")){
        if(player.dialogue) return
        setSprite(player,"player-up")
        player.move(0,-player.speed)
      }
      else if(isKeyDown("right") || isKeyDown("d")){
        if(player.dialogue) return
        player.flipX=true
        if(player.curAnim()!=="run"){
          setSprite(player,"player-side")
          player.play("run")
        }
        player.move(player.speed,0)
      }
      else if(isKeyDown("left") || isKeyDown("a")){
        if(player.dialogue) return
        player.flipX=false
        if(player.curAnim()!=="run"){
          setSprite(player,"player-side")
          player.play("run")
        }
        player.move(-player.speed,0)
      }
    })
    onKeyRelease("left",()=>{
      player.stop()
    })
    onKeyRelease("right",()=>{
      player.stop()
    })
    onKeyRelease("a",()=>{
      player.stop()
    })
    onKeyRelease("d",()=>{
      player.stop()
    })
    player.pos.x=worldState.playerPosX
    player.pos.y=worldState.playerPosY

    player.onCollide("helpnpc",()=>{
      dialogue(player,worldState,"Beat all the minigames on the island for a reward! There are X minigames remaining.","You've beaten all the minigames!",false,"",worldState.gamesbeaten.length<4)//dodati neku nagradu kasnije)
    })
    player.onCollide("marionpc",()=>{
      dialogue(player,worldState,"Do you want to help me run for my new suit? Press E to accept!","Thanks for helping me get my suit! You want to play again?",true,"mario",true)//dodati neku nagradu kasnije)
    })
    player.onCollide("gameroomdoor",()=>{
      worldState.location = createGameRoom
      disable(helpnpc)
      disable(marionpc)
      enable(timergame)
      enable(spaceinvaders)
      useMap(worldState.location)
    })
    player.onCollide("timergame",()=>{
      dialogue(player,worldState,"Press E to play!","You did it! Play again?",true,"timergame",true)      
    })
    player.onCollide("spaceinvaders",()=>{
      dialogue(player,worldState,"Press E to play!","You did it! Play again?",true,"spaceinvaders",true)
    })
    player.onCollide("islanddoor",()=>{
          worldState.location = createIsland
          enable(helpnpc)
          enable(marionpc)
          disable(timergame)
          disable(spaceinvaders)
          useMap(worldState.location)
    })
}
