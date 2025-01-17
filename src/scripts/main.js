console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';

const yearlyPlan = createPlan();
console.log(yearlyPlan);

const corn = createCorn();
console.log(corn);
