import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Giftbagssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Giftbagssingl;