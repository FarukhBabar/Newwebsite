import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Lynwoodsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/lynwoodsingle');

export default Lynwoodsingl;