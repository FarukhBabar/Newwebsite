import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Giftwarehomesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/giftwarehsingle');

export default Giftwarehomesingl;