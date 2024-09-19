import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Amtechsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/amtechsingle');

export default Amtechsingle;