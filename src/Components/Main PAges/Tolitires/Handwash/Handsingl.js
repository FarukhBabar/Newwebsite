import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Handsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/handsingle');

export default Handsingle;