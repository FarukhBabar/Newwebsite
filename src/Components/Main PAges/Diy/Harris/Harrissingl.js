import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Harrissingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/harrissingle');

export default Harrissingl;