import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Brooksingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/brooksingle');

export default Brooksingle;