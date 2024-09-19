import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Hagesansingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/hagsensingle');

export default Hagesansingl;