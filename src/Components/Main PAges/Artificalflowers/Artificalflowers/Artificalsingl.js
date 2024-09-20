import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Artificalsingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/artificalsingle');

export default Artificalsingel;