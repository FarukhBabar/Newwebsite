import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Picnicsingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/picnicsingle');

export default Picnicsingel;