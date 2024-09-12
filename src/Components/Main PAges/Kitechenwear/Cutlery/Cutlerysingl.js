import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Cutlerysingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/culterysingle');

export default Cutlerysingl;