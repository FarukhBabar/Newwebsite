import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Healthcareesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/healthcareesingle');
export default Healthcareesingl;