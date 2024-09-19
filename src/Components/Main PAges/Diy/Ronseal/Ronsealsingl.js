import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Ronsealsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/ronsealsingle');

export default Ronsealsingl;