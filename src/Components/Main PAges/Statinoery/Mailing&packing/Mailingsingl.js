import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Mailingsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/mailingsingle');

export default Mailingsingle;