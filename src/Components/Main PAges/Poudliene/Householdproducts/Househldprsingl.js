import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Househldprsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/householdprsingle');

export default Househldprsingl;
