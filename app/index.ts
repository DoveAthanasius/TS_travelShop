import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours";
import {initFooterTitle, initHeaderTitle, initToursDivElements} from "@services/general/general";

function initApp(): void {
  
  // init data
  const tourData: Promise<ITours[]> = getTours();
  
  tourData.then((data): void => {
    console.log('call ')
    toursDataArray = data;
    initToursDivElements(data);
  });
  
  
}

initHeaderTitle('Туры', 'h1');
initFooterTitle('Туры по всему миру', 'h2');
export let toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist
initApp();



