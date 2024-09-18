import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Showergelsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/showergelsingle');

export default Showergelsingle;