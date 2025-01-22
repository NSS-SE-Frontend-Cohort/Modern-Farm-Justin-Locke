import { createPlan } from './plan.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { catalog } from './catalog.js';


const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);

const field = usePlants();

const harvestedPlants = harvestPlants(field);

const sortedHarvestedPlants = harvestedPlants.sort((a, b) => {
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;
    return 0;
})

const foodHtml = catalog(sortedHarvestedPlants);


const foodContainer = document.getElementById("food-list");
foodContainer.innerHTML = foodHtml;