import {Application,Request,Response} from 'express';
import {dbMessages, dbParticipants,dbMessagesQueuePerUser} from "../db-data";
import {Message} from '../../shared/model/message';
import * as _ from 'lodash';
import {findThreadById} from './functions/findThreadById';

let messageIdCounter = 20;
export function apiSaveNewMessage(app: Application) {
    
        app.route('/api/threads/:id').post((req: Request, res: Response) => {
    
            const payload = req.body;
    
            const threadId = parseInt(req.params.id),
                participantId = parseInt(req.headers['userid'].toString());
    
            const message: Message = {
                id: messageIdCounter++,
                threadId,
                timestamp: new Date().getTime(),
                text: payload.text,
                participantId
            };
    
           
            dbMessages[message.id] = message;
    
            const thread = findThreadById(threadId);
            if(thread!=undefined){
                thread.isArchived=false;
                thread.messageIds.push(message.id);
        
                const otherParticipantIds = _.keys(thread.participants).filter(id => parseInt(id) !== participantId);
        
                otherParticipantIds.forEach(participantId => {
                    thread.participants[participantId] += 1;
                    dbMessagesQueuePerUser[participantId].push(message.id);
        
                });
        
                thread.participants[participantId] = 0;
        
                res.status(200).send();
            }
           
    
        });
    
    }