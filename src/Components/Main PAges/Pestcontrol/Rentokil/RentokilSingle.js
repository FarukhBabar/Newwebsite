import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const RentokilSingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/rentokilsingle');

export default RentokilSingle;