import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Freshnersingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Freshnersingle');

export default Freshnersingle;