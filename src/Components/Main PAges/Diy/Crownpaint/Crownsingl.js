import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Crownsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/crownsingle');

export default Crownsingle;