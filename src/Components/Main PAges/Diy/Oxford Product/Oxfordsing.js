import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Oxfordsing = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/oxfordsingle');

export default Oxfordsing;