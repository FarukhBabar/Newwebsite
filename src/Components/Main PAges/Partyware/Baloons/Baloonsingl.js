import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Baloonsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/baloonsingle');

export default Baloonsingl;