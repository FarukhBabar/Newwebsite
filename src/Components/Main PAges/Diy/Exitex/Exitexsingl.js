import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Exitexsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/exitexsingle');

export default Exitexsingle;