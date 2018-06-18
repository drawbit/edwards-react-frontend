import pumpIcon from './assets/Icon_Pump-family@2x.png';
import pumpIconActive from './assets/Icon_pump_highlighted@2x.png';
import maintenanceIcon from './assets/Icon_Maintenance-regime@2x.png';
import maintenanceIconActive from './assets/Icon_Maintenance-regime_highlighted@2x.png';
import locationIcon from './assets/Icon_Location@2x.png';
import locationIconActive from './assets/Icon_location_highlighted@2x.png';
import applicationIcon from './assets/Icon_Application@2x.png';
import applicationIconActive from './assets/Icon_application_highlighted@2x.png';

export default [
  {
    icon: {
      regular: pumpIcon,
      active: pumpIconActive
    },
    label: 'Pump Family',
    type: 'PUMP'
  },
  {
    icon: {
      regular: maintenanceIcon,
      active: maintenanceIconActive
    },
    label: 'Maintenance Regime',
    type: 'MAINTENANCE'
  },
  {
    icon: {
      regular: locationIcon,
      active: locationIconActive
    },
    label: 'Location',
    type: 'LOCATION'
  },
  {
    icon: {
      regular: applicationIcon,
      active: applicationIconActive
    },
    label: 'Application',
    type: 'APPLICATION'
  },
];
