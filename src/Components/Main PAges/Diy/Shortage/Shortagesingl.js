import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Shortagesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/shortagesingle');

export default Shortagesingl;