import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Apronssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Apronssingle');

export default Apronssingle;