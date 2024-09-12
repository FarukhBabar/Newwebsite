import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bathmatssinglr = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bathmatessingle');

export default Bathmatssinglr;