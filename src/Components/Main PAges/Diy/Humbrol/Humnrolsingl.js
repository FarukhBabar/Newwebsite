import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Humnrolsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/humnrolsingle');

export default Humnrolsingl;