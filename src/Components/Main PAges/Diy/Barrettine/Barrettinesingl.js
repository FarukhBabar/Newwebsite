import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Barrettinesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/barrientsingle');

export default Barrettinesingle;