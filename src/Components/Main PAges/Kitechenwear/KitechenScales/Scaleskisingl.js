
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Scaleskisingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/scalesingle');

export default Scaleskisingl;