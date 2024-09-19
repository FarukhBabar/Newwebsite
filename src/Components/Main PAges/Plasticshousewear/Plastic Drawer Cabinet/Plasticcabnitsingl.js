import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Plasticcabnitsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/plasticcabnitsingle');

export default Plasticcabnitsingl;