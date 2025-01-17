console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';
import { addPlant } from './field.js';
import { usePlants } from './field.js';

const yearlyPlan = createPlan();
console.log(yearlyPlan);

const cornSeed = createCorn();
console.log(cornSeed);

addPlant(cornSeed);
addPlant(cornSeed);
const field = usePlants();

console.log('field = ',JSON.stringify(field));