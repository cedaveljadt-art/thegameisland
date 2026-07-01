kaboom({
    width: 1000,
    height: 500,
    canvas:document.getElementById("canvas"),
    touchToMouse: true,
    background: [54, 166, 224],
    gravity: 0,
    debug: true,
    font:"pixelFont"
})
loadAssets()
scene ("island", (worldState) => setWorld(worldState))
go("island")