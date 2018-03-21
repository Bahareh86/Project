import {Application,Request,Response} from 'express';
import {dbMessages, dbParticipants,dbMessagesQueuePerUser, dbThreads} from "../db-data";
import * as _ from 'lodash';
import {findThreadById} from './functions/findThreadById';
import { Participant } from '../../shared/model/participant';
import { Thread } from '../../shared/model/thread';


let participantIdCounter = 10;
let threadIdCounter =6;

export function apiSaveNewParticipant(app: Application) {
    
        app.route('/api/participants/newParticipant').post((req: Request, res: Response) => {
    
            const payload = req.body;
    
            const participantId = parseInt(req.headers['userid'].toString());
    
            const participant: Participant = {
                id: participantIdCounter++,
                name:payload.userName,
                phoneNumber:payload.phoneNumber
            };
             dbParticipants[participant.id]=participant;
             
             const thread:Thread={
                 id:threadIdCounter++,
                 messageIds:[],
                 participants:{[participantId]:0,[participant.id]:0},
                 isArchived:false
             }
             dbThreads[thread.id]=thread;
              
            res.status(200).send();
    
        });
    
    }