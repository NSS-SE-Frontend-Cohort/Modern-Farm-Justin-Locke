console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tactor.js';
import { harvestPlants } from './harvester.js';
import { catalog } from './catalog.js';

const yearlyPlan = createPlan();
console.log(JSON.stringify(yearlyPlan));

const cornSeed = createCorn();
console.log(JSON.stringify(cornSeed));
plantSeeds(yearlyPlan);
const field = usePlants();

console.log('field = ',JSON.stringify(field));

const harvestedPlants = harvestPlants(field);
console.log("Harvested plants =", JSON.stringify(harvestedPlants));

const html = catalog(harvestedPlants);
console.log(html)

