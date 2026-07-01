scene("timergame2",(worldState)=>{
    setBackground(Color.fromHex("#606060"))
    console.log(worldState)
    let sec=0
    let cs=0
    let stopped=true
    let timecount = 0
    if(worldState.gamesbeaten.includes("timer2")){
        add([
            text("Game already beaten!",{font:"timerFont",size:12}),
            color(0,255,0),
            anchor("center"),
            fixed(),
            pos(width()/2,100),
            z(50)
        ])
    }
    container=add([
        rect(width()/1.5,height()/1.5),
        color(0,0,0),
        anchor("center"),
        fixed(),
        pos(width()/2,height()/2-25)
    ])
    time=container.add([
        text("Press between 19:50 and 20:50",{size:16,font:"timerFont"}),
        color(255,0,0),
        anchor("center"),
        fixed(),
        pos(0,0)
    ])
    button1=add([
        anchor("center"),
        scale(10),
        fixed(),
        z(20),
        sprite("arrowbutton"),
        pos(60,height()-75)
    ])
    button2=add([
        anchor("center"),
        scale(10),
        fixed(),
        z(20),
        sprite("arrowbutton"),
        pos(width()-60,height()-75)
    ])
    button1.flipX=true
    onUpdate(()=>{
        if(!stopped){
            timecount += dt()
            while(timecount >= 0.01){
                timecount -= 0.01
                cs++
                if(cs >= 100){
                    cs = 0
                    sec++
                }
                dsec = String(sec).padStart(2, "0")
                dcs = String(cs).padStart(2, "0")
                time.text = dsec + ":" + dcs
            }
            time.opacity -= dt() * 0.5
        }
    })
    
    onKeyPress("space",()=>{
        if(stopped){
            sec=0
            cs=0
            timecount=0
            destroy(time)
            time=container.add([
                text("00:00",{size:88,font:"timerFont"}),
                color(255,0,0),
                opacity(1),
                anchor("center"),
                fixed(),
                pos(0,0)
            ])
            stopped=false
        }
        else{
            if(sec*100+cs>1949 && sec*100+cs<2051){
                time.color=rgb(0,255,0)
                if(!worldState.gamesbeaten.includes("timer2")){
                    worldState.gamesbeaten.push("timer2")
                }
            }
            time.opacity=1
            stopped=true
        }
    })
    onKeyPress("escape",()=>{
        if(stopped){
            console.log(worldState.gamesbeaten)
            go("island",worldState)
        }
    })
    onKeyPress("left",()=>{ if(stopped) go("timergame",worldState) })
    onKeyPress("right",()=>{ if(stopped) go("timergame",worldState) })
    onKeyPress("a",()=>{ if(stopped) go("timergame",worldState) })
    onKeyPress("d",()=>{ if(stopped) go("timergame",worldState) })
})