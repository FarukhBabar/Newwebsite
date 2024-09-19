import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const MelamineOutdoorsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/melaminsingle');

export default MelamineOutdoorsingl;