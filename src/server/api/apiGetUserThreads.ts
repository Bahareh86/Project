import {Application,Request,Response} from 'express';
import {dbMessages, dbParticipants} from "../db-data";
import {Message} from '../../shared/model/message';
import * as _ from 'lodash';
import {AllUserData}  from '../../shared/to/all-user-data'
import {findDbThreadsPerUser} from './functions/findDbThreadsPerUser';
import {Thread} from "../../shared/model/thread";
import {dbThreads} from "../db-data";

export function apiGetUserThreads(app:Application){
    debugger;
    app.route('/api/threads').get((req: Request, res: Response) => {
        
        //const participantId =
           //parseInt(req.headers['userid'].toString());
        
                //const threadsPerUser = findDbThreadsPerUser(participantId);
                const allThreads: Thread[] = _.values<Thread>(dbThreads);
                let messages: Message[] = [],
                    participantIds: string[] = [];
        
                    allThreads.forEach(thread => {
        
                    const threadMessages: Message[] = _.filter(dbMessages, (message:any) => message.threadId == thread.id);
        
                    messages = messages.concat(threadMessages);
        
                    participantIds  = participantIds.concat(_.keys(thread.participants));
        
                });
        
                const participants = _.uniq(participantIds.map(participantId => dbParticipants[participantId]));
        
                const response: AllUserData = {
                  participants,
                  messages,
                  threads: allThreads
                };
        
                res.status(200).json(response);
        
            });
        
    
}