
let clasificarDieta = (alimentos,filtrar)=>{
    setTimeout(()=>{
        let alimentosFiltrados = alimentos.filter(alimento =>alimento.tipo == 'vegetal' && alimento.nivelEnergia > 200)
        console.log(alimentosFiltrados)
        filtrar(alimentosFiltrados)
    },5000)
}

let variosAlimentos = ['carne','semillas','hojas','jugo','costilla','harina','ramas','animal']
let tipos = ['vegetal','animal','insecto']
let alimentos = []

for(i = 0; i < 50 ; i++){
    let alimento = {
        nombre:variosAlimentos[Math.floor(Math.random() * variosAlimentos.length)],
        tipo: tipos[Math.floor(Math.random() * tipos.length)],
        nivelEnergia:Math.floor((Math.random() * (500-1)) +1)
    }
    
    alimentos.push(alimento)
}
console.log(alimentos)

clasificarDieta(alimentos,alimentosFiltrados =>{
    let sumatoriaNiveles = alimentosFiltrados.reduce((contador,alimentoFiltrado)=>{
        return contador + alimentoFiltrado.nivelEnergia
    },0)

    console.log(`El nivel total de la energia  entregados por los alimentos vegetales es de: ${sumatoriaNiveles}`)
})




