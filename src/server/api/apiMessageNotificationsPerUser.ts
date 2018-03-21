
import {Application,Request,Response} from 'express';
import {dbMessages, dbParticipants,dbMessagesQueuePerUser} from "../db-data";
import {Message} from '../../shared/model/message';
import * as _ from 'lodash';
import {findThreadById} from './functions/findThreadById';


export function apiMessageNotificationsPerUser(app: Application) {
    
    
        app.route('/api/notifications/messages').post((req, res) => {
    
            const participantId = req.headers['userid'].toString();
    
            if (!participantId) {
                res.status(200).json({payload:[]});
                return;
            }
    
            const unreadMessageIds = dbMessagesQueuePerUser[participantId];
    
            const unreadMessages = unreadMessageIds.map( messageId => dbMessages[messageId] );
    
            dbMessagesQueuePerUser[participantId] = [];
    
            res.status(200).json({payload: unreadMessages});
    
        });
    
    }