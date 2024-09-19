import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Carplansingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/carplansingle');

export default Carplansingle;