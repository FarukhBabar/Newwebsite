import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Crystalsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/crystalsingle');

export default Crystalsingl;