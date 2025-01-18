export const harvestPlants = (plantArray) => {
    let harvestedPlants = [];

    plantArray.forEach(plant => {
        if (plant.type == "Corn") {
            let counter = 0;

            while (counter < plant.output/2) {
                harvestedPlants.push(plant.type);
                counter++;
            }
        }
        else {
            let counter = 0;

            while (counter < plant.output) {
                harvestedPlants.push(plant.type);
                counter++;
            }
        }       
    });
    return harvestedPlants;
}