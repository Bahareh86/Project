import {Application,Request,Response} from 'express';
import {dbMessages, dbParticipants, dbMessagesQueuePerUser} from "../db-data";
import {Message} from '../../shared/model/message';
import * as _ from 'lodash';
import {AllUserData}  from '../../shared/to/all-user-data'
import {findDbThreadsPerUser} from './functions/findDbThreadsPerUser';
import {Thread} from "../../shared/model/thread";
import {dbThreads} from "../db-data";

export function apiMarkThreadAsReadByUser(app:Application){
    debugger;
    app.route('/api/threads/:id').patch((req, res) => {
        
                const participantId = req.headers['userid'].toString();
        
                const thread=dbThreads[req.params.id];

                const updatedProps=req.body;
                if (updatedProps.hasOwnProperty('read')) {
                    if(thread!=undefined)
                    {
                      thread.participants[participantId] = 0;
                    }
                    
                }
                               
                res.status(200).send();

        
            });
        
    
}