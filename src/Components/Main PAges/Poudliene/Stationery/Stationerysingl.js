
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Stationerysingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/stationsingle');

export default Stationerysingl;