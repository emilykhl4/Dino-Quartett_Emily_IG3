const grid = $(".grid");
console.log(grid);

for (let i = 0; i < data.length; i++) {
	const dataObject = data[i];
	const {
		name,
		group,
		image,
		group_letter,
		random_fact,
		territorial_range,
		number_teeth,
		iq,
		card_number,
		years,
		length,
		height,
		weight,
		speed,
	} = dataObject;

	const card = createCard();
	card.html(`
    <div class="card-wrapper">
        <div class="card-content">
            <div class="card-number center-content">${group_letter}${card_number}</div>
            <div class="card-title">
                <h5>${name}</h5>
                <h6>${group}</h6>
            </div>
            <div class="card-image center-content">
                <img src="${image}" alt="This is not a ${name}">
            </div>
            <div class="info-icon center-content">Info</div>
            <div class="info">${random_fact}</div>

            <div class="stats-wrapper">
                <div class="card-stat center-content">
                    <img src="../images/icons/height.png" alt="height">
                </div>
                <div class="card-val center-content">${height}</div>
                <div class="card-stat center-content">
                    <img src="../images/icons/weight.png" alt="weight">
                </div>
                <div class="card-val center-content">${weight}</div>
                <div class="card-stat center-content">
                    <img src="../images/icons/extinction.png" alt="years since extinction">
                </div>
                <div class="card-val center-content">${territorial_range}</div>
                <div class="card-stat center-content">
                    <img src="../images/icons/iq.png" alt="eq times 100">
                </div>
                <div class="card-val center-content">${iq}</div>
                <div class="card-stat center-content bottom-left">
                    <img src="../images/icons/speed.png" alt="max speed">
                </div>
                <div class="card-val center-content">${speed}</div>
                <div class="card-stat center-content">
                    <img src="../images/icons/teeth.png" alt="no. of teeth">
                </div>
                <div class="card-val center-content bottom-right">${number_teeth}</div>
            </div>
        </div>
    </div>
    `);
	grid.append(card);
}
