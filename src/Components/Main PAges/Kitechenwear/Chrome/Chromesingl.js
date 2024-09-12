
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Chromesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/chromsingle');

export default Chromesingl;