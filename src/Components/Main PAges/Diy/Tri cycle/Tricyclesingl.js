import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Tricyclesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/tricyclesingle');

export default Tricyclesingl;