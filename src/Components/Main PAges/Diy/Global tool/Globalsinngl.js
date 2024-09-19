import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Globalsinngl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/globalsingle');

export default Globalsinngl;