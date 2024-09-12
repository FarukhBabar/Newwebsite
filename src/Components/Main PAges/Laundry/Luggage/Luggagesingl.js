import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Luggagesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/luggagesingle');

export default Luggagesingl;