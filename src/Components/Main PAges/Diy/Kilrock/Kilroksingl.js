import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Kilroksingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kilrocksingle');

export default Kilroksingl;