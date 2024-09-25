
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Cellowrapsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Cellowrapsingl;