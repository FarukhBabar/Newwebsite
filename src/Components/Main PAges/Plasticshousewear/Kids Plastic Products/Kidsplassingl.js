import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Kidsplassingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kidsplassingle');

export default Kidsplassingl;