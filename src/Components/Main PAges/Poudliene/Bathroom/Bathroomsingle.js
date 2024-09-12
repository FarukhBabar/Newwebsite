import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bathroomsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bathroomsingle');

export default Bathroomsingle;