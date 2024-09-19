import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Carprosingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/carprosingle');

export default Carprosingle;