
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Kettlessingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kettlessingle');

export default Kettlessingl;