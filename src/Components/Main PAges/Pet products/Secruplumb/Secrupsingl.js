import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Secrupsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/secupsingle');

export default Secrupsingl;