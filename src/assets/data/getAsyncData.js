import products from "./data"

function getAsyncData() {
    
    
    const promiseData = new Promise( (resolve, reject) => {
        const errorFatal = false
        
        setTimeout( () => {
            if (errorFatal) reject("algo salio mal!!")

            console.log('Promesa terminada')
            resolve( products )
        }, 2000 )
        } )


    return promiseData;
}

export function GetAsyncDataById(id) {
    
    
    const promiseData = new Promise( (resolve, reject) => {
        const errorFatal = false
        
        setTimeout( () => {
            if (errorFatal) reject("algo salio mal!!")


            const itemRequested = products.find( product => {return product.id === Number   (id)} )

            if (itemRequested === undefined) reject("Producto no encontrado")

            resolve( itemRequested )
        }, 500 )
        } )


    return promiseData;
}

export function GetAsyncDataByCategory(catid) {
    
    
    const promiseData = new Promise( (resolve, reject) => {
        const errorFatal = false
        
        setTimeout( () => {
            if (errorFatal) reject("algo salio mal!!")


            const itemRequested = products.filter( product => {return product.category.toLowerCase() === catid.toLowerCase()} )

            if (itemRequested === undefined) reject("Producto no encontrado")

            resolve( itemRequested )
        }, 500 )
        } )


    return promiseData;
}


export default getAsyncData