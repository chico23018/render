
import { isAxiosError } from "axios";
import { ResponseRender } from "../../../interface/ResponsRender/respons-service";
import { render } from "../http/api";
import { ServiceEntity } from '../../../interface/Entities/entityService';
import { Service } from "../../../mapper/mapper-service";


export const getServiceData = async (): Promise<ServiceEntity[]> => {
 
  try {
    const { data } = await render.get<ResponseRender[]>('/services');
    const servicedata = data.map(Service.mapperResponseToEntityService);
    return servicedata;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }

    throw new Error('Error getting products');
  }
};
