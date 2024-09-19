import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Locktilesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/locktilesingle');

export default Locktilesingl;