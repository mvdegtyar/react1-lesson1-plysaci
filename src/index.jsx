import { createRoot } from 'react-dom/client';
import './global.css';

const plushy1 = {
  name: 'Silvestr',
  image: 'https://kodim.cz/cms/assets/vyvoj-webu/react1/lekce/uvod-do-reactu/cv-prvni-aplikace/plysaci/elephant.jpg',
  text: 'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.',
};
const plushy2 = {
  name: 'Ctirad',
  image: 'https://kodim.cz/cms/assets/vyvoj-webu/react1/lekce/uvod-do-reactu/cv-prvni-aplikace/plysaci/mouse.jpg',
  text: 'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.',
};

const card_plushy1 =
  <div className="plushy">
    <img className="plushy__image" src={plushy1.image} />
    <h2 className="plushy__name">{plushy1.name}</h2>
    <p className="plushy__text">{plushy1.text}</p>
  </div>;

const card_plushy2 =
  <div className="plushy">
    <img className="plushy__image" src={plushy2.image} />
    <h2 className="plushy__name">{plushy2.name}</h2>
    <p className="plushy__text">{plushy2.text}</p>
  </div>;

const content =
  <div className='container'>
    <h1>Plyšáci</h1>
    <div className="plushies">
      {card_plushy1}
      {card_plushy2}
    </div>
  </div>;

createRoot(
  document.querySelector('#app'),
).render(content);
