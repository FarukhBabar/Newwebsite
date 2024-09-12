import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Hosierysingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/hoiserypsingle');

export default Hosierysingl;