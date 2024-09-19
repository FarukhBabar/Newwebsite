import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Primacarsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/primacarsingle');

export default Primacarsingl;