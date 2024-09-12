import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Simplehusingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/simplehumansingle');

export default Simplehusingl;