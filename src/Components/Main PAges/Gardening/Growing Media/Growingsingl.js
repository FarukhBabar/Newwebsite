import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Growingsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/growingsingle');

export default Growingsingle;