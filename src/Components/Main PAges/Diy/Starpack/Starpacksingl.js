import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Starpacksingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/starpacksingle');

export default Starpacksingl;