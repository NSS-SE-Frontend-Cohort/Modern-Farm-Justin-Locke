import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createSunflower } from "./seeds/sunflower.js";
import { addPlant } from "./field.js";


export const plantSeeds = (plantingPlan) => {
    plantingPlan.forEach(row => {
        row.forEach(plantType => {
            
            let seed;
            
            switch(plantType) {
                case "Asparagus":
                    seed = createAsparagus();
                    break;
                case "Corn":
                    seed = createCorn();
                    break;
                case "Potato":
                    seed = createPotato();
                    break;
                case "Soybean":
                    seed = createSoybean();
                    break;
                case "Sunflower":
                    seed = createSunflower();
                    break;
                case "Wheat":
                    seed = createWheat();
                    break;
            }

            addPlant(seed);

        });
    });
}