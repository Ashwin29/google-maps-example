import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// Initialize an instance of the custom map.
const customMap = new CustomMap('map');

// Initialize an instance the user.
const user = new User();

// Initialize an instance of company.
const company = new Company();

// Add a marker for the current user instance.
customMap.addMarker(user);

// Add a marker for the current company instance.
customMap.addMarker(company);
