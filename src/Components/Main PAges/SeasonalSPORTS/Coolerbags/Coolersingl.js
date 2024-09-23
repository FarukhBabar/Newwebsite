import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Coolersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/sportsingle');

export default Coolersingl;