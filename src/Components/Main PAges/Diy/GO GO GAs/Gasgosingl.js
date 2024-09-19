import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Gasgosingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/gassyssingle');

export default Gasgosingl;