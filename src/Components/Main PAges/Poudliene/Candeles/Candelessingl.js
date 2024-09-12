import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Candelessingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/candelessingle');

export default Candelessingl;