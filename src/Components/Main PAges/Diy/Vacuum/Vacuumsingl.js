import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Ultratrapesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/vacuumsingle');

export default Ultratrapesingl;