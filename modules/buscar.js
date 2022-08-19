const buscar = (value, data, container) => {
    container.innerHTML = ''
    const results = data.filter(m => m.title.toLowerCase().includes(value.toLowerCase()))
    console.log(results)
    return results
    
}

export default buscar;