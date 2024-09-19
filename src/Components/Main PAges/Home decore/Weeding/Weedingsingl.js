import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Weedingsingal = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/weddingsingle');

export default Weedingsingal;