import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Memorialssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/memorialsingle');

export default Memorialssingl;