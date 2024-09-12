
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Woodensingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/woodensingle');

export default Woodensingl;