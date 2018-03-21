
import{Participant} from '../../shared/model/participant';
import{Thread} from '../../shared/model/thread';
import{Message} from '../../shared/model/message';

export interface StoreData{
 participants: {[key:number]: Participant},
 threads:{[key:number]:Thread},
 messages:{[key:number]:Message},
 
}

export const INISIAL_STORE_DATA:StoreData ={
    participants:{},
    threads:{},
    messages:{},
   
}