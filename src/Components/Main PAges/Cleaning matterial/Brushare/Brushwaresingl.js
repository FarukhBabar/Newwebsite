import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Brushwaresingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/brushwaresingle');

export default Brushwaresingel;