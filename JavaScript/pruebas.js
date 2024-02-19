console.log("****Mensaje tardio****")
let mensaje = () => {console.log("Este mensaje debe aparecer a los 2 segundos")}
setTimeout(mensaje, 2000)