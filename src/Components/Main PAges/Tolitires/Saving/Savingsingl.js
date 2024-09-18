import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Savingsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/savingsingle');

export default Savingsingle;