import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Freshnsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/freshnsingle');

export default Freshnsingle;