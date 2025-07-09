import { CustomRequest } from 'src/common/types/custom-request';
import { ServiceItemDataLoader } from './loaders/service-item.dataloader';
import { UserDataLoader } from './loaders/user.dataloader';

export interface GqlContext {
  userDataLoader: UserDataLoader;
  serviceItemDataLoader: ServiceItemDataLoader;
  //   appointmentDataLoader: AppointmentDataLoader;
  currentUser: CustomRequest;
}
