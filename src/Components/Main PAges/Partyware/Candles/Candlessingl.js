import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Candlessingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Candlessingl;