
let infiltrarse = (obtenerPlanoVerdadero)=>{
    let planos = []
    
    for(i =0;i <10;i++){
        planos.push(Math.floor((Math.random() * (50-1)) +1))
    }
    console.log(planos)
    obtenerPlanoVerdadero(planos)
    
}

infiltrarse(planos=>{
    let planosVerdaderos = planos.filter(plano=>plano<=10)

    console.log(`Hay ${planosVerdaderos.length} Planos Verdaderos`)
})