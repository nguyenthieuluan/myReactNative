import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Nguyen Thieu Luan!");
});

export const onEmployeeCreate = functions.database
.ref('/users/{userId}/employees/{employeeId}')
.onCreate( async (snapshot, context) => {
    const userId = context.params.userId;
    const emplployeeId = context.params.employeeId;

    console.log('add');

    const countRef = snapshot.ref.parent.parent.child('employeeCount')
    return countRef.transaction(count => {
        return count + 1;
    })
})

export const onEmployeeDelete = functions.database
.ref('/users/{userId}/employees/{employeeId}')
.onDelete( async (snapshot, context) => {

    console.log('delete');

    const countRef = snapshot.ref.parent.parent.child('employeeCount')
    return countRef.transaction(count => {
        return count - 1;
    })
})

export const onStatusUpdate = functions.database
.ref('/users/{userId}/employees/{employeeId}')
.onUpdate(  (change, context) => {
    const before = change.before.val()
    const after = change.after.val()

    if (before.text === after.text) {
        console.log("status didn't change")
        console.log(before.text)
        return null
    }
    
    if (after.text === 'active') {
        console.log("active")
        const countRef = change.after.ref.parent.parent.child('activeCount');
        return countRef.transaction(count => {
            return count + 1;
        })
    }

    if (after.text === 'offline') {
        console.log("offline")
        const countRef = change.after.ref.parent.parent.child('activeCount');
        return countRef.transaction(count => {
            return count - 1;
        })
    }
    return null;
})