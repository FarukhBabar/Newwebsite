import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Readingsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/readingsingle');

export default Readingsingl;