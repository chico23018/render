import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigationConfig } from '../../../config/useNavigationConfig';
import { Card, Layout, Modal, Text } from '@ui-kitten/components';
import styles from '../../stylePresentation/StylePrentation';

interface Props {
  evento: {
    id: string;
    status: string;
    message: string;
  };
}

export const CustomCardEvent = ({ evento }: Props) => {
  const [visible, setVisible] = useState(false); // Stato per gestire la visibilità del modal
  const { navigation } = useNavigationConfig(); // Hook per la configurazione della navigazione
  const { width } = useWindowDimensions(); // Hook per ottenere le dimensioni della finestra
  const heightWidth = width / 3 - 6; // Calcolo della larghezza e altezza del card

  return (
    <Card
      style={{ margin: 3, width: heightWidth, height: heightWidth, alignItems: 'center', justifyContent: 'center' }}
      onPress={() => console.log(evento.id, "status", evento.status)} // Gestore dell'evento onPress
      onLongPress={() => setVisible(true)} // Gestore dell'evento onLongPress per aprire il modal
    >
      <Modal
        visible={visible} // Stato di visibilità del modal
        backdropStyle={styles.backdrop} // Stile per il backdrop del modal
        onBackdropPress={() => setVisible(false)} // Chiude il modal quando si preme sul backdrop
      >
        <Card disabled={true}>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.text}>
            {evento.message}  {/* Testo dell'evento visualizzato nel modal */}
          </Text>  
        </Card>
      </Modal>
      <Layout>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.text}>
          {evento.message} {/* // Testo dell'evento visualizzato nel card */}
        </Text>
      </Layout>
    </Card>
  );
};

