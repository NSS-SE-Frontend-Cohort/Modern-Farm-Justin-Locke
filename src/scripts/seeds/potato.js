import { createSeed } from "../helperFunctions/seedCreator.js";

export const createPotato = () => {

    const potato = createSeed("Potato", 32, 2);

    return potato;
    
}