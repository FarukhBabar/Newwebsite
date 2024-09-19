import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Pestconsing = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/pestcosingle');

export default Pestconsing;