import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Cottonsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/cottonsingle');

export default Cottonsingle;