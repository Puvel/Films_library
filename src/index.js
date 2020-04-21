import './stylesheet/main.css';
import './components/Card/navigation';
import './components/searchForm/searchForm';
import './components/searchBtn/searchBtn';
import './components/mainFilmsList/mainFilmsList.js'
import apiServesFetch from './services/services';
apiServesFetch.fetchPopularityApi();
