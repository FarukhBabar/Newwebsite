import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const StvSingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/stvsingle');

export default StvSingle;