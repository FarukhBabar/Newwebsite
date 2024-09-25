
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Weedingsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Weedingsingl;
