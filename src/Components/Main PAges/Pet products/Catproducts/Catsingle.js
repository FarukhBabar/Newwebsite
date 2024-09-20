import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Catsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/catsingle');

export default Catsingle;