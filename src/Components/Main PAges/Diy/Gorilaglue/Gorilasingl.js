import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Gorilasingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/gorilasingle');

export default Gorilasingl;