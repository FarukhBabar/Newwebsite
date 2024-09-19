import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Chamoissingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/chomissingle');

export default Chamoissingle;