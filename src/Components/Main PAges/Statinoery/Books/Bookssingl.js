import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bookssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bookssingle');

export default Bookssingle;