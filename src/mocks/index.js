import {getRandomArrayItem, getRandomIntegerFromGap, shuffleArray} from '../utils/common';

const RENDER_COUNT = 4;

const ROUTE_MAP = {
  'bus': `img/icons/bus.png`,
  'check-in': `img/icons/check-in.png`,
  'drive': `img/icons/drive.png`,
  'flight': `img/icons/flight.png`,
  'restaurant': `img/icons/restaurant.png`,
  'ship': `img/icons/ship.png`,
  'sightseeing': `img/icons/sightseeing.png`,
  'taxi': `img/icons/taxi.png`,
  'train': `img/icons/train.png`,
  'transport': `img/icons/transport.png`,
  'trip': `img/icons/trip.png`
};

const ROUTE_TYPES = [`bus`, `check-in`, `drive`, `flight`, `restaurant`, `ship`, `sightseeing`, `taxi`, `train`, `transport`, `trip`];

const CITIES = [`Tokyo`, `Osaka`, `Amsterdam`, `Moscow`, `Paris`, `Milan`];
const PHOTOS = [`http://picsum.photos/300/150?r=${Math.random()}`, `http://picsum.photos/300/150?r=${Math.random()}`, `http://picsum.photos/300/150?r=${Math.random()}`, `http://picsum.photos/300/150?r=${Math.random()}`, `http://picsum.photos/300/150?r=${Math.random()}`];
const DESCRIPTIONS = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget.`, `Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`, `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`, `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat.`, `Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`];
const DATE_FROM = `18/03/19 12:25`;
const DATE_TO = [`18/03/19 13:25`];
const OPTIONS = [
  {
    name: `Add luggage`,
    price: 10
  },
  {
    name: `Comfort class`,
    price: 150
  },
  {
    name: `Add meal`,
    price: 2
  },
  {
    name: `Choose seats`,
    price: 9
  },
];

const generateOptions = () => {
  const amount = getRandomIntegerFromGap(0, 2);
  const options = [];
  for (let i = 0; i < amount; i++) {
    if (!amount) {
      return;
    }
    options.push(getRandomArrayItem(OPTIONS));
  }
  // eslint-disable-next-line consistent-return
  return options;
};

const createMock = () => {
  const randomType = getRandomArrayItem(ROUTE_TYPES);
  const durationFrom = 10;
  const durationTo = 11;

  return {
    'type': ROUTE_MAP[randomType],
    'city_name': getRandomArrayItem(CITIES),
    'photos': PHOTOS,
    'description': shuffleArray(DESCRIPTIONS).slice(0, getRandomIntegerFromGap(0, 3)),
    'duration_from': durationFrom,
    'duration_to': durationTo,
    'duration': durationTo - durationFrom,
    'date_from': DATE_FROM,
    'date_to': DATE_TO,
    'price': Math.floor(Math.random() * 1000),
    'options': generateOptions()
  };
};

const createMocks = () => {
  const mocks = [];
  for (let i = 0; i < RENDER_COUNT; i++) {
    mocks.push(createMock());
  }
  return mocks;
};

export {
  createMocks,
};


