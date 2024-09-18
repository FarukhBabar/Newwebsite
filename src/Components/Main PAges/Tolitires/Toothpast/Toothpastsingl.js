import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Toothpastsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/toothpastsingle');

export default Toothpastsingle;