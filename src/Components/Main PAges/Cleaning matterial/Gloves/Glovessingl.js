import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Glovessingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/glovessingle');

export default Glovessingl;