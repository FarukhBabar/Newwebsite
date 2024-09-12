import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Householdclsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/householclsingle');

export default Householdclsingl;