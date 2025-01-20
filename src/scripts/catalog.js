export const catalog = (harvestedFoodArray) => {
    let foodHtml = '';

    harvestedFoodArray.forEach(foodItem => {
        const foodType = foodItem.type;
        foodHtml += `
        <section class="plant" id="${foodType.toLowerCase()}">
        ${foodType}
        </section>
        `
    });

    return foodHtml;
}