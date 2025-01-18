import { isAxiosError } from "axios"; 
import { render } from "../http/api"; 
import { DataEvent } from "../../../interface/ResponsRender/response-event"; 
import { Evento } from "../../../interface/Entities/entityService"; 
import { EventoData } from "../../../mapper/mapper-event"; 
export const getEventData = async (serviceId: string, pageParam?: string): Promise<Evento[]> => {
  
  try {
    // Realiza una solicitud GET a la API para obtener los eventos asociados al serviceId.
    const { data } = await render.get<DataEvent[]>(`/services/${serviceId}/deploys`, {
      params: {
        cursor: pageParam // Envía el cursor como parámetro en la solicitud.
      }
    });

    // Mapea los datos recibidos a la estructura de la entidad Evento.
    const eventData = data.map(EventoData.mapperResponseToEntityEvento);

    return eventData; // Devuelve la lista de eventos.
  } catch (error) {
    // Maneja errores de la solicitud.
    if (isAxiosError(error)) {
      throw error; // Si es un error de Axios, vuelve a lanzarlo.
    }

    // Lanza un error genérico si no es un error de Axios.
    throw new Error('Error getting products');
  }
};
