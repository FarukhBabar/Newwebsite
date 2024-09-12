import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bagssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bagslsingle');

export default Bagssingle;