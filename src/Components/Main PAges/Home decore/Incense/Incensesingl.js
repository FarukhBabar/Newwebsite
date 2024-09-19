import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Incensesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/incensesingle');

export default Incensesingl;