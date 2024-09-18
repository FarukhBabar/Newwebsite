import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Campingsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/campingsingle');

export default Campingsingle;