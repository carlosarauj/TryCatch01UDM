/* try{
    console.log(x)
} catch (e){
    console.log('Deu ruim')
    console.log(e)
} */

function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser number')
    }
    return x + y
}

try{
console.log(soma(10,1))
console.log(soma(10,'oi'))
} catch(error){
    console.log('Deu ruim')
}