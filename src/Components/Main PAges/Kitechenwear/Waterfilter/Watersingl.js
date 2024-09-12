
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Watersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/watersingle');

export default Watersingl;