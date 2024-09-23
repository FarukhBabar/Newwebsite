import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Sportsbottelsingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/sportbottelsingle');

export default Sportsbottelsingel;