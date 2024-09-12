import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Showheadsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/showheadsingle');

export default Showheadsingle;