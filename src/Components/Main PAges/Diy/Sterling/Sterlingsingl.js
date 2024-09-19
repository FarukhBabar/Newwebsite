import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Sterlingsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/sterlingsingle');

export default Sterlingsingl;