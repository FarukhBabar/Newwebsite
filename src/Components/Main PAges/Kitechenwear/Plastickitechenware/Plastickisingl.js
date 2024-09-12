import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Plastickisingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/plastickitechensingle');

export default Plastickisingl;