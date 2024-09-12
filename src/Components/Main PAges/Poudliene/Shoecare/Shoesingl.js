import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Shoesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/shoesingle');

export default Shoesingl;