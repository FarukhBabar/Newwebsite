import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Rolsonsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/rolsonsingle');

export default Rolsonsingl;