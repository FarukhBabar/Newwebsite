import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Towelaccesssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/towelaccessoriessingle');

export default Towelaccesssingle;