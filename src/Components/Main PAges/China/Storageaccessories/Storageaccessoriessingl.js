import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Storageaccessoriessingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/storageaccesssingle');

export default Storageaccessoriessingel;