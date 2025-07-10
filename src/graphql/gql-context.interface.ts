import { CustomRequest } from 'src/common/types/custom-request';
import { ServiceItemDataLoader } from '../serviceItem/dataloaders/service-item.loader';
import { UserDataLoader } from '../user/dataloader/user.loader';

export interface GqlContext {
  userDataLoader: UserDataLoader;
  serviceItemDataLoader: ServiceItemDataLoader;
  //   appointmentDataLoader: AppointmentDataLoader;
  currentUser: CustomRequest;
}
