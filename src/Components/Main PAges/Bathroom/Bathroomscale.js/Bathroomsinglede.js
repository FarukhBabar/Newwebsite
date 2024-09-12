import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bathroomsinglede = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bathroomdesingle');

export default Bathroomsinglede;