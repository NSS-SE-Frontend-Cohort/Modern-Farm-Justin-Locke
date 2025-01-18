export const harvestPlants = (plantArray) => {
    let harvestedPlants = [];

    plantArray.forEach(plant => {
        let counter = 0;
        
        if (counter < plant.output && plant.type != "Corn") {
            harvestedPlants.push(plant);
            counter ++;
        }
        else if (plant.type == "Corn" && counter < plant.output/2) {
            harvestedPlants.push(plant);
            counter ++;
        }
    });

    return harvestPlants;
}