import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Laacesssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Loundrysingle');

export default Laacesssingle;