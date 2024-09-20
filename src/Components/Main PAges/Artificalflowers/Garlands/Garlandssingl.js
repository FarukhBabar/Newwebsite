import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Garlandssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/garlandsingle');

export default Garlandssingl;