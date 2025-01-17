console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';
import { addPlant } from './field.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tactor.js';

const yearlyPlan = createPlan();
console.log(JSON.stringify(yearlyPlan));

const cornSeed = createCorn();
console.log(cornSeed);
plantSeeds(yearlyPlan);
const field = usePlants();

console.log('field = ',JSON.stringify(field));