// En un archivo llamado types.ts
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    inicio: undefined;
    sesion: undefined;
    registrarte: undefined;
    principal: undefined;
    Consejos: undefined;
    Recompensas: undefined;
    Comunidad: undefined;
    Recorrido: undefined;
    perfil:undefined;
    cuenta:undefined;
    soporte:undefined;
    pregunta:undefined;
    enviar:undefined;
  };


  export type ConsejosProps = StackScreenProps<RootStackParamList, 'Consejos'>;
  export type RecompensasProps = StackScreenProps<RootStackParamList, 'Recompensas'>;
  export type ComunidadProps = StackScreenProps<RootStackParamList, 'Comunidad'>;
  export type RecorridoProps = StackScreenProps<RootStackParamList, 'Recorrido'>;
  