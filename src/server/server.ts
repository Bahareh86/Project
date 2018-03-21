import * as express from 'express';
import {Application} from 'express';
import {apiGetUserThreads} from './api/apiGetUserThreads';
import { apiSaveNewMessage } from './api/apiSaveNewMessage';
import { apiMessageNotificationsPerUser} from './api/apiMessageNotificationsPerUser'
import {apiMarkThreadAsReadByUser} from './api/apiMarkThreadAsReadByUser'
import {apiMarkThreadAsArchived} from './api/apiMarkThreadAsArchived';
import {apiSaveNewParticipant} from './api/apiSaveNewParticipant';

const bodyParser=require('body-parser');

debugger;

const app:Application=express();
app.use(bodyParser.json());

apiGetUserThreads(app);
apiSaveNewMessage(app);
apiMessageNotificationsPerUser(app);
apiMarkThreadAsReadByUser(app);
apiMarkThreadAsArchived(app);
apiSaveNewParticipant(app);

app.listen(8090,()=>
console.log('server is now running on port 8090 ....'))





