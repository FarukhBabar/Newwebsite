import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Crokerysingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/crokerysingle');

export default Crokerysingl;