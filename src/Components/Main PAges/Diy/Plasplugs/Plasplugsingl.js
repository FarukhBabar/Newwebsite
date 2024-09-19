import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Plasplugsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/plasplugsingle');

export default Plasplugsingl;