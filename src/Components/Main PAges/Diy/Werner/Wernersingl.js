import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Wernersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/wernersingle');

export default Wernersingl;