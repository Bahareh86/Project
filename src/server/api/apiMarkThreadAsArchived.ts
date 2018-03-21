import {Application,Request,Response} from 'express';
import {dbMessages, dbParticipants, dbMessagesQueuePerUser} from "../db-data";
import {Message} from '../../shared/model/message';
import * as _ from 'lodash';
import {AllUserData}  from '../../shared/to/all-user-data'
import {findDbThreadsPerUser} from './functions/findDbThreadsPerUser';
import {Thread} from "../../shared/model/thread";
import {dbThreads} from "../db-data";

export function apiMarkThreadAsArchived(app:Application){
    debugger;
    app.route('/api/threads/:id').put((req, res) => {
        
                const threadId = req.params['id'];   
                const allThreads: Thread[] = <any> _.values(dbThreads);
                 
              
               const updatedProps=req.body;
                if (updatedProps.hasOwnProperty('archived')) {
                    const thread = _.find(allThreads, thread =>  thread.id == threadId );
                    thread.isArchived=true;
                }
                             
                res.status(200).send();

        
            });
        
    
}