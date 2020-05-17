import createOfferItem from './OfferItem';

const eventComponent = ({type, city_name, duration_from, duration_to, duration, date_from, date_to, price, options}) => {
  return (
    `<div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="${type}" alt="Event type icon">
                    </div>
                    <h3 class="event__title">Drive to ${city_name}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-19T10:00">${duration_from}:00</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-19T11:00">${duration_to}:00</time>
                      </p>
                      <p class="event__duration">${duration}H</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">${price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      ${options.length !== 0 ? options.map((option) => createOfferItem(option)).join(``) : `Choose options`}
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>`
  );
};

export default eventComponent;
