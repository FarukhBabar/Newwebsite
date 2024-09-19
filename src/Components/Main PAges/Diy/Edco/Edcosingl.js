import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Edcosingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/edcosingle');

export default Edcosingle;