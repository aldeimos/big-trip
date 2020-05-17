const createRouteComponent = (mocks) => {

  const calculateTotalPrice = () => {
    let amount = 0;
    for (let mock of mocks) {
      amount += mock.price;

      if (mock.options.length !== 0) {
        mock.options.forEach((option) => {
          amount += option.price;
        });
      }
    }
    return amount;
  };

  return (
    `<div class="trip-info__main">
        <div>
        <h1 class="trip-info__title">${mocks[0].city_name} &mdash; ... &mdash; ${mocks[mocks.length - 1].city_name}</h1>
        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
        </div>
        <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${calculateTotalPrice()}</span>
        </p>
    </div>`
  );
};

export default createRouteComponent;


