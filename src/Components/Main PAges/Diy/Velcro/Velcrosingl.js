import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Velcrosingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/velcrosingle');

export default Velcrosingl;