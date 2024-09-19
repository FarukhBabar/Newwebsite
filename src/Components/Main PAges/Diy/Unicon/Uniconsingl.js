import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Uniconsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/uniconsingle');

export default Uniconsingl;