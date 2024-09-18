import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Giftsetssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/giftsingle');

export default Giftsetssingle;