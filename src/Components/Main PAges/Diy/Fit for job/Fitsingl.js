import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Fitsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/fitsingle');

export default Fitsingle;