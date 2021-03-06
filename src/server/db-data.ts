import{Message} from '../shared/model/message';
import{Participant} from '../shared/model/participant';
import{Thread} from '../shared/model/thread';
export const dbParticipants: {[key: number]: Participant} = {
    
    1: {
        id: 1,
        name: 'Alice',
        phoneNumber:"604 111 2222"
    },
    2: {
        id: 2,
        name: 'Bob',
        phoneNumber:"604 543 2105"
    },
    3: {
        id: 3,
        name: 'Chuck',
        phoneNumber:"604 222 7805"
    },
    4: {
        id: 4,
        name: 'David',
        phoneNumber:"604 222 7805"
    },
    5: {
        id: 5,
        name: 'Erin',
        phoneNumber:"604 222 7805"
    }
};


export const dbThreads: {[key: number]: Thread} = {
    1: {
        id: 1,
        messageIds: [1, 2, 3, 4, 5],
        participants: {
            1: 0,
            2: 0
        },
        isArchived:false
    },
    2: {
        id: 2,
        messageIds: [6, 7, 8, 9, 10],
        participants: {
            3: 0,
            4: 0
           
        },
        isArchived:false

    },
    3: {
        id: 3,
        messageIds: [11, 12, 13],
        participants: {
            
            1: 0,
            4: 0
            
        },
        isArchived:false
    },
     4: {
        id: 4,
        messageIds: [14,15,16],
        participants: {
            
            1: 0,
            3: 0
            
        },
        isArchived:false
    },
    5:{
        id: 5,
        messageIds: [],
        participants: {
            
            2: 0,
            5: 0
            
        },
        isArchived:false
    }
};


export const dbMessages: {[key: number]: Message} = {
    
        1: {
            id: 1,
            threadId: 1,
            participantId: 1,
            text: 'Did you take take out the trash today ?',
            timestamp: new Date().getTime()
    
        },
        2: {
            id: 2,
            threadId: 1,
            participantId: 2,
            text: 'Is it full again ?',
            timestamp: new Date().getTime()
        },
        3: {
            id: 3,
            threadId: 1,
            participantId: 1,
            text: 'Yes, can you take it out now ? ',
            timestamp: new Date().getTime()
        },
        4: {
            id: 4,
            threadId: 1,
            participantId: 2,
            text: 'OK, no problem',
            timestamp: new Date().getTime()
        },
    
        5: {
            id: 5,
            threadId: 1,
            participantId: 1,
            text: 'Great',
            timestamp: new Date().getTime()
        },
    
        6: {
            id: 6,
            threadId: 2,
            participantId: 1,
            text: 'This living room is a disaster, clean this up kids ! ',
            timestamp: new Date().getTime()
        },
        7: {
            id: 7,
            threadId: 2,
            participantId: 3,
            text: 'Wasn\'t me Mom ! ',
            timestamp: new Date().getTime()
        },
        8: {
            id: 8,
            threadId: 2,
            participantId: 4,
            text: 'Me neither Mom ! ',
            timestamp: new Date().getTime()
        },
        9: {
            id: 9,
            threadId: 2,
            participantId: 4,
            text: 'Really ! ',
            timestamp: new Date().getTime()
        },
        10: {
            id: 10,
            threadId: 2,
            participantId: 1,
            text: 'OK kids thats enough, tidy up the living room now please !',
            timestamp: new Date().getTime()
        },
    
    
        11: {
            id: 11,
            threadId: 3,
            participantId: 1,
            text: 'Everyone come to the table, dinner is ready ',
            timestamp: new Date().getTime()
        },
        12: {
            id: 12,
            threadId: 3,
            participantId: 3,
            text: 'No dad Im watching this cartoon its not over yet ',
            timestamp: new Date().getTime()
        },
        13: {
            id: 13,
            threadId: 3,
            participantId: 4,
            text: 'No Mom we want to keep watching TV too its my favorite show ',
            timestamp: new Date().getTime()
        },
        14: {
            id: 14,
            threadId: 4,
            participantId:1,
            text: 'gaaaggggaaaaaaaaaa mhmaam mhaammmm mmaaammaaa paaappppaaaaa',
            timestamp: new Date().getTime()
        },
        15: {
            id: 15,
            threadId: 4,
            participantId: 3,
            text: 'Maybe later, I\'m not hungry ',
            timestamp: new Date().getTime()
        },
        16: {
            id: 16,
            threadId: 4,
            participantId: 1,
            text: 'Let\'s go everyone, put that on pause and come to the table, the dinner will be cold',
            timestamp: new Date().getTime()
        }
    
    };


export const dbMessagesQueuePerUser: {[key: number]: number[]} = {

    1: [],
    2: [],
    3: [],
    4: [],
    5: []

};













