import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Briwaxsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/briwaxsingle');

export default Briwaxsingle;