function encontrarNumero(arreglo, numero){
    if(arreglo.includes(numero) == true){
        return `El numero ${numero} existe en el array`
    } else {
        return `El valor solicitado no existe`
    }
}