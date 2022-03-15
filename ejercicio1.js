let  clasificarPadawan = (nombre,planeta,edad,estatura,asignarActividad)=>{
    setTimeout(()=>{
        let padawan = {
            nombre:nombre,
            planeta:planeta,
            edad:edad,
            estatura:estatura
        }
        asignarActividad(padawan)
    },10000)
}

clasificarPadawan('Sebas','Saturno',17,1.78,padawan=>padawan.edad <= 15 ? console.log(`Actividad de ${padawan.nombre}: Manejo de Fuerza`):console.log(`Actividad de ${padawan.nombre}: Manejo Del Sable De Luz`))