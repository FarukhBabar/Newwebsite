import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Toothbrushsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/toothbrushsingle');

export default Toothbrushsingle;