import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bannersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Bannersingl;