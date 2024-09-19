import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Jbweldsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/jbwelsingle');

export default Jbweldsingl;