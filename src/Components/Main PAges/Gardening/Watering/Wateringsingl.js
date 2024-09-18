import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Wateringsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/wateringsingle');

export default Wateringsingle;