let field = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        seed.forEach(plantSeed => {
            field.push(plantSeed)
        
        })
    }
    else {
    field.push(seed);
    }
}

export const usePlants = () => {
    return field;
}