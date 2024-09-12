import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Ioriningsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/ironingsingle');

export default Ioriningsingle;