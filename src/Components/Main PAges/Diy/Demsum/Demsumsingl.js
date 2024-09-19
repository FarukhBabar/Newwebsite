import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Demsumsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/demsumsingle');

export default Demsumsingle;