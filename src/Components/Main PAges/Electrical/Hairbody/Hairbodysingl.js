import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Hairbodysingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/hairbodysingle');

export default Hairbodysingle;