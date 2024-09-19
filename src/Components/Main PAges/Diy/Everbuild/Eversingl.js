import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Eversingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/eversingle');

export default Eversingle;