import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Metalbucksingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/metalbucksingle');

export default Metalbucksingel;