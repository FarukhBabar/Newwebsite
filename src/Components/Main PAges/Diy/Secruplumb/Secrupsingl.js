import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Secrupsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/secupsingle');

export default Secrupsingl;