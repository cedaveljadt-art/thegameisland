scene("spaceinvaders",(worldState)=>{
    let free=true
    setBackground(rgb(11, 11, 73))
    ship=add([
        sprite("ship"),
        area(),
        body(),
        pos(400,380),
        area({shape: new Rect(vec2(25, 25), 150,150)}),
        scale(0.7)
    ])
    add([
        rect(1,height()),
        body({isStatic:true}),
        area(),
        pos(width(),0)
    ])
    add([
        rect(1,height()),
        body({isStatic:true}),
        area(),
        pos(0,0)
    ])
    ship.play("idle")
    ship.onUpdate(()=>{
        if(isKeyDown("a") || isKeyDown("left")){
            ship.move(-200,0)
        }
        else if(isKeyDown("d") || isKeyDown("right")){
            ship.move(200,0)
        }
        if(isKeyDown("space") && false){//umesto false staviti neki powerup za mlaz koji traje oko 5s
            add([
                rect(20,50),
                pos(ship.pos.x,ship.pos.y),
                area(),
                color(rgb(255,0,0)),
                move(UP,500),
                "bullet"
            ])
        }
    })
    onKeyPress("space",()=>{
        if(free){
            add([
                rect(20,50),
                pos(ship.pos.x+50,ship.pos.y),
                area(),
                color(rgb(255,0,0)),
                move(UP,500),
                "bullet"
            ])
            free=false
            wait(0.3,()=>{free=true})
        }
    })
    function alien(){
        for(i=0;i<5;i++){
            rng=Math.floor(rand(0,2))
            if(rng==1){
                a=add([
                    sprite("alien1"),
                    area(),
                    pos(50+i*200,0),
                    move(DOWN,120),
                    scale(0.35),
                    "alien"
                ])
                a.play("idle")
            }
        }
        wait(rand(0.8,1.8),alien)
    }
    alien()
    onUpdate(()=>{
        for(const a of get("alien")){
            a.onCollide("bullet",()=>{
                destroy(a)
            })
        }
    })
    ship.onCollide("alien",()=>{
        go("gameOverSpaceInvaders",worldState)
    })
})
scene("gameOverSpaceInvaders",(worldState)=>{
    setBackground(rgb(0, 0, 0))
    add([
        text("Game Over",{font:"timerFont",size:48}),
        pos(width()/2,height()/2),
        anchor("center")
    ])
    add([
        text("Press space to play again",{font:"timerFont",size:24}),
        pos(width()/2,height()/2+100),
        anchor("center")
    ])
    onKeyPress("space",()=>{
        go("spaceinvaders",worldState)
    })
    onKeyPress("escape",()=>{
        go("island",worldState)
    })
})