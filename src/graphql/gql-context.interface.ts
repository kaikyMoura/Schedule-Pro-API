import { CustomRequest } from 'src/common/types/custom-request';
import { ServiceItemDataLoader } from '../service-items/dataloaders/service-item.loader';
import { UserDataLoader } from '../users/dataloaders/user.loader';

export interface GqlContext {
  userDataLoader: UserDataLoader;
  serviceItemDataLoader: ServiceItemDataLoader;
  //   appointmentDataLoader: AppointmentDataLoader;
  currentUser: CustomRequest;
}
