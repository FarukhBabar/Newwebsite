
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Pcardssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Pcardssingl;
