console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { catalog } from './catalog.js';


const yearlyPlan = createPlan();
console.log(JSON.stringify(yearlyPlan));

plantSeeds(yearlyPlan);

const field = usePlants();

const harvestedPlants = harvestPlants(field);

const sortedHarvestedPlants = harvestedPlants.sort((a, b) => {
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;
    return 0;
})

const foodHtml = catalog(sortedHarvestedPlants);
console.log(foodHtml);


const foodContainer = document.getElementById("food-list");
console.log("Food container", foodContainer);
foodContainer.innerHTML = foodHtml;