import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Miscsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/lynwoodsingle');

export default Miscsingl;