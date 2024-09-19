import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Candelsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/candelsingle');

export default Candelsingl;