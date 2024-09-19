import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Bostiksingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bostiksingle');

export default Bostiksingle;