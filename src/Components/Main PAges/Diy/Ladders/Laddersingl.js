import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Laddersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/laddersingle');

export default Laddersingl;