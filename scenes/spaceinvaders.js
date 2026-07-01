scene("spaceinvaders",(worldState)=>{
    score=0
    let free=true
    let freePowerup=true
    let time=0
    end=false
    powerup=false
    setBackground(rgb(11, 11, 73))
    ship=add([
        sprite("ship"),
        area(),
        body(),
        pos(400,380),
        area({shape: new Rect(vec2(25, 25), 150,100)}),
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
        pos(-1,0)
    ])
    scoret=add([
        text("0",{size:36,font:"timerFont"}),
        pos(50,40),
        z(999)
    ])
    ship.play("idle")
    ship.onUpdate(()=>{
        if(isKeyDown("a") || isKeyDown("left")){
            ship.move(-200,0)
        }
        else if(isKeyDown("d") || isKeyDown("right")){
            ship.move(200,0)
        }
        if(powerup && freePowerup){
            freePowerup=false
            add([
                rect(20,50),
                pos(ship.pos.x,ship.pos.y),
                area(),
                color(rgb(255,0,0)),
                move(UP,500),
                "bullet",
                offscreen({destroy:true})
            ])
            wait(0.1,()=>{freePowerup=true})
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
                "bullet",
                offscreen({destroy:true})
            ])
            free=false
            wait(0.3,()=>{free=true})
        }
    })
    function alien(){
        for(i=0;i<5;i++){
            rng=Math.floor(rand(0,7))
                if(rng==1){
                    a=add([
                        sprite("alien1"),
                        area(),
                        pos(50+i*200,0),
                        move(DOWN,120+time*2),
                        scale(0.35),
                        "alien",
                        offscreen({destroy:true})
                    ])
                    a.play("idle")
                }
                else if(rng==2){
                    a=add([
                        sprite("alien2"),
                        area(),
                        pos(50+i*200,0),
                        move(DOWN,120+time*2),
                        scale(0.35),
                        "alien",
                        offscreen({destroy:true})
                    ])
                    a.play("idle")
                }
                else if(rng==3){
                    a=add([
                        sprite("alien3"),
                        area(),
                        pos(50+i*200,0),
                        move(DOWN,120+time*2),
                        scale(0.35),
                        "alien",
                        offscreen({destroy:true})
                    ])
                    a.play("idle")
                }
                else if(rng==4 && score>5){
                    a=add([
                        sprite("ufo"),
                        area(),
                        pos(50+i*200,0),
                        move(DOWN,120+time),
                        scale(0.35),
                        "alien",
                        "ufo",
                        offscreen({destroy:true})
                    ])
                    a.play("idle")
                }

        }
        if(score<2 && !end){
            wait(rand(0.8,1.8),alien)
        }
        else{
            end=true
            add([
                text("YOU WIN",{font:"timerFont",size:150}),
                pos(width()/2,height()/2),
                anchor("center"),
                z(1000),
                move(DOWN,100)
            ])
        }
    }
    alien()
    onUpdate(()=>{ 
        time+=dt()
        for(const a of get("alien")){
            if(!a.collided){
                a.collided=true
                if(!get("ufo").includes(a)){
                    a.onCollide("bullet",()=>{
                        a.unuse("move")
                        a.play("boom")
                        wait(0.3,()=>{
                            destroy(a)
                        })
                        score++
                        scoret.text=score
                    })
                }
                else{
                    a.onCollide("bullet",(b)=>{
                        destroy(b)
                        if(!a.lives){
                            a.lives=3
                        }
                        else{
                            a.lives-=1
                            if(a.lives<=0){
                                destroy(a)
                                powerup=true
                                wait(3.5,()=>{
                                    powerup=false
                                })
                            }
                        }
                    })
                }
            }
        }
    })
    ship.onCollide("alien",()=>{
        go("gameOverSpaceInvaders",worldState,score)
    })
})
high=0
scene("gameOverSpaceInvaders",(worldState,score)=>{
    if(score>high){
        high=score
    }
    setBackground(rgb(0, 0, 0))
    add([
        text("Game Over",{font:"timerFont",size:48}),
        pos(width()/2,height()/2-100),
        anchor("center")
    ])
    add([
        text("Score: "+score,{font:"timerFont",size:24}),
        pos(width()/2,height()/2),
        anchor("center")
    ])
    add([
        text("High Score: "+high,{font:"timerFont",size:24}),
        pos(width()/2,height()/2+100),
        anchor("center")
    ])
    add([
        text("Press space to play again",{font:"timerFont",size:24}),
        pos(width()/2,height()/2+200),
        anchor("center")
    ])
    onKeyPress("space",()=>{
        go("spaceinvaders",worldState)
    })
    onKeyPress("escape",()=>{
        go("island",worldState)
    })
})