import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Darpersingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/darpersingle');

export default Darpersingle;