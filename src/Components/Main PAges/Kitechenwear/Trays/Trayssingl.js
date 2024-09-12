
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Trayssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/traysingle');

export default Trayssingl;