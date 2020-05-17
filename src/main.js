import createRouteComponent from './components/Route';
import createSiteMenuComponent from './components/Menu';
import createSiteFilterComponent from './components/Filter';
import createSiteSortComponent from './components/Sort';
import createRoutesList from './components/RoutesList';
import createRoutesItem from './components/RouteItem';
import createEventForm from './components/EditRoute';
import {createMocks} from './mocks';


const siteHeaderInfo = document.querySelector(`.trip-info`);
const siteHeaderMenu = document.querySelector(`.trip-controls`);
const siteMain = document.querySelector(`.trip-events`);

const mocks = createMocks();

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};


render(siteHeaderInfo, createRouteComponent(mocks), `afterbegin`);

render(siteHeaderMenu, createSiteMenuComponent());
render(siteHeaderMenu, createSiteFilterComponent());
render(siteMain, createSiteSortComponent());
render(siteMain, createRoutesList());

const routesList = siteMain.querySelector(`.trip-days`);


mocks.map((mock, index) => render(routesList, createRoutesItem(mock, index)));

const eventsList = routesList.querySelector(`.trip-events__list`);
render(eventsList, createEventForm(mocks[0]));


