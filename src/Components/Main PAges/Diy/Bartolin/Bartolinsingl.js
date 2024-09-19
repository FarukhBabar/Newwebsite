import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bartolinsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bartolinsingle');

export default Bartolinsingle;