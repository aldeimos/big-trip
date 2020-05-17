import eventComponent from "./Event";

const createRoutesItem = (data, index) => {
  return (
    `<li class="trip-days__item  day">
     <div class="day__info">
       <span class="day__counter">${index + 1}</span>
       <time class="day__date" datetime="2019-03-19">MAR 19</time>
      </div>

      <ul class="trip-events__list">
                ${index !== 0 ? `<li class="trip-events__item">${eventComponent(data)}</li>` : ``}
      </ul>`
  );
};

export default createRoutesItem;
