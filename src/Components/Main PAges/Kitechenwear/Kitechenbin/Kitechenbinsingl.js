import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Kitechenbinsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kitechenaccsingle');

export default Kitechenbinsingl;