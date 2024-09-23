import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Matssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/matessingle');

export default Matssingl;