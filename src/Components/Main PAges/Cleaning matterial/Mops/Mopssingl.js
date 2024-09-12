import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Mopssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/mopssingle');

export default Mopssingl;