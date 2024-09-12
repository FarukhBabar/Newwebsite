import withDataFetching from '../../withDataFrtching';
import SinglePage from '../../Singlepage';

const Smokingsinglepage = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/smokingsingalepage');

export default Smokingsinglepage;