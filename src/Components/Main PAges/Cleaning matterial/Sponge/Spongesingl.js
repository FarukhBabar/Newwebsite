import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Spongesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/spongesingle');

export default Spongesingl;