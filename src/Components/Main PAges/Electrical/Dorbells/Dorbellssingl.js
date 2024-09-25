import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Dorbellssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/doorbeelssingle');

export default Dorbellssingle;