import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Giftwaresingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/giftwaresingle');

export default Giftwaresingle;