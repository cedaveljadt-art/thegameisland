function fullscreen(){
    var elem = document.getElementById("canvas");
    elem.focus()
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}
lasttap=0
function isMobile() {
    try {
        const hasTouch = navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
        const isMobileUA = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
            .test(navigator.userAgent);

        return hasTouch || isMobileUA;
    } catch (error) {
        return false;
    }
}
if (isMobile()){
    document.getElementById("fullscreen").style.display="none"
    document.getElementById("fullscreenbutton").style.display="flex"
    document.getElementById("devmode").style.display="none"
    document.getElementById("devmodebutton").style.display="flex"
}
function devmode(){
    debug.inspect=!debug.inspect
}
let song = null
started=false
score=0
dead=false
scene("mario",(worldState)=>{
    if (!song || song.paused) {
        song=play("song",{loop:true})
    }
    volume(1)
    dead=false
    score=0
    onKeyPress("1",fullscreen)
    onKeyPress("2",()=>{debug.inspect=!debug.inspect})
    bg=add([
        rect(width(),height()),
        color(147, 131, 253)
    ])
    ground = add([
        sprite("ground"),
        pos(0,height()-95),
        area(),
        body({ isStatic: true }),
        scale(2)
    ])
    mario = add([
        sprite("mario"),
        pos(80,40),
        area({shape: new Rect(vec2(8, 0), 16, 32)}),
        body(),
        scale(2)
    ])
    mario.play("idle")
    function enemy(){
        if (dead) return
        if(score<350){
            r=0
        }
        else if(score<1500){
            r=Math.floor(rand(0, 2))
        }
        else if(score<2000){
            r=Math.floor(rand(0, 3))
        }
        else{
            r=Math.floor(rand(0, 4))
        }
        if(get("bomber").length > 0 || get("hammer").length>0){
            r=Math.floor(rand(0, 2))
        }
        if(r==0){
            r1=Math.floor(rand(0, 2))
            if(r1==0){
                e=add([
                sprite("shell"),
                pos(width(),height()-95),
                anchor("botright"),
                move(LEFT,250),
                area({shape: new Rect(vec2(-8, 0), 16, 16)}),
                body({ isStatic: true }),
                scale(2),
                "enemy"
            ])
            }
            else{
                e=add([
                    sprite("turtlewalking"),
                    pos(width(),height()-95),
                    anchor("botright"),
                    move(LEFT,250),
                    area({shape: new Rect(vec2(-8, 0), 16, 24)}),
                    body({ isStatic: true }),
                    scale(2),
                    "enemy"
                ])
            }
        }
        else if(r==1){
            e=add([
                sprite("turtle"),
                pos(width(),height()-95),
                anchor("botright"),
                move(LEFT,270),
                area({shape: new Rect(vec2(-8, 0), 16, 24)}),
                body({ isStatic: true }),
                scale(2),
                "enemy"
            ])
        }
        else if(r==2){
            e=add([
                sprite("turtlebomber"),
                pos(width(),100),
                anchor("botright"),
                move(LEFT,180),
                area({shape: new Rect(vec2(-8, 0), 16, 24)}),
                body({ isStatic: true }),
                scale(2),
                "enemy",
                "bomber"
            ])
        }
        else if(r==3){
            e=add([
                sprite("hammer"),
                pos(width(),100),
                anchor("center"),
                move(LEFT,600),
                area({shape: new Rect(vec2(0, 0), 16, 16)}),
                body({ isStatic: true }),
                scale(2),
                rotate(0),
                "enemy",
                "hammer"
            ])
            play("throw")
        }
       e.play("run")
        wait(rand(0.7,1.3),enemy)
    }
    enemy()
    running=false
    jumping=false
    setGravity(3000)
    onKeyDown("space",jump)
    onKeyDown("up",jump)
    onKeyDown("w",jump)
    onMouseDown(jump)
    score=0
    mario.onCollide("enemy",()=>{
        song.stop()
        started=false
        mario.play("small")
        for (const e of get("enemy")) {
            e.paused = true
        }
        shake(2.8)
        dead=true
        wait(1, () => {
            if (song) {
                song.stop()
            }
            go("gameOverMario", score,worldState)
            play("end")
        })
    })
    lblScore = add([
        text("Score: " + score, {size:30}),
        pos(40,40)
    ])
    onUpdate(()=>{
        if (dead) return
        for (const e of get("enemy")) {
            if (e.pos.x < -64) {
                destroy(e)
            }
        }
        for (const h of get("hammer")) {
            h.angle+=20
        }
        console.log(get().length)
        score+=1
        lblScore.text = "Score: " + score
        if(mario.isGrounded() && !running){
            jumping=false
            running=true
            mario.play("run")
        }
    })
    function jump(){
        if (dead) return
        if(mario.isGrounded() && !jumping){
            running=false
            jumping=true
            mario.jump(1300)
            play("jump")
            mario.play("jumpstart")
            wait(0.3, () => {
                mario.play("jumpend")
            })
        }
    }

})
high = 0
scene("gameOverMario",(score,worldState)=>{
    console.log(worldState)
    onKeyPress("escape",()=>{
        if(song) song.stop()
        go("island",worldState)
    })
    high = Number(localStorage.getItem("high")) || 0
    started=false
    wait(2.25,()=>{
        if(song) song.stop()
        song=play("song",{loop:true})
        started=true
    })
    onKeyPress("1",fullscreen)
    onKeyPress("2",()=>{debug.inspect=!debug.inspect})
    if(high< score){
        high = score
        localStorage.setItem("high", score);
    }
  
    add([
        rect(width(),height()),
        color(147, 131, 253)
    ])
    add([
        text("High Score: " + high,{size:50}),
        pos(width()/2,height()/2),
        anchor("center")
    ])
    add([
        text("Score: " + score,{size:50}),
        pos(width()/2,height()/2-100),
        anchor("center")
    ])
    add([
        text("Press space to try again",{size:50}),
        pos(width()/2,height()/2+100),
        anchor("center")
    ])
    onKeyPress("space",()=>{
        go("mario",worldState)
    })
    onClick(()=>{
        go("mario",worldState)
    })
})
