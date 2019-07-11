export function getFromStorage(key) {
    if (!key) {
        return null;
    }

    try {
        var valueStr = localStorage.getItem(key)
        if (valueStr) {
            return JSON.parse(valueStr)
        }
        return null
    } catch(error) {
        return null
    }
}

export function setInStorage(key, obj) {
    console.log("executing set in storage")
    if (!key) {
        console.error('Error: No key to store!')
    }

    try {
        localStorage.setItem(key, JSON.stringify(obj))
        console.log("trying to store...")
        console.log("key:  " + key)
        console.log('object:')
        console.log(obj)
    } catch (error) {
        console.error(error)
    }
}