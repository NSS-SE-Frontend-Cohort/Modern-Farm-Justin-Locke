export const catalog = (harvestedFoodArray) => {
    let foodHtml = '';

    harvestedFoodArray.forEach(foodItem => {
        foodHtml += `
        <section class="plant" id="${foodItem.toLowerCase()}>
        ${foodItem}
        </section>
        `
    });

    return foodHtml;
}