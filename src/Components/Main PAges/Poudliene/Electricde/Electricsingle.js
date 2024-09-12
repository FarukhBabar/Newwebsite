import withDataFetching from '../../../../withDataFetching';
import SinglePage from '../../../../SinglePage';

const Electricsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Electricsingle');

export default Electricsingle;