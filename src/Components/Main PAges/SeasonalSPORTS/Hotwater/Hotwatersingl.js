import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Hotwatersingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/hotwatersingle');

export default Hotwatersingel;