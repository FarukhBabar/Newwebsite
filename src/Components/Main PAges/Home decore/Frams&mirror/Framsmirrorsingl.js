import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Framsmirrorsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/frammirrorsingle');

export default Framsmirrorsingl;