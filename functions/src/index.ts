import * as functions from 'firebase-functions';
import admin from './firebaseAdmin';

// Use the Firestore service
const db = admin.firestore();

export const createTodo = functions.https.onRequest(async (request:any, response:any) => {
    if (request.method !== "POST") {
        response.status(400).send('Please send a POST request');
        return;
    }
    try {
        const { title, description, completed } = request.body;
        const data = {
            title,
            description,
            completed,
            created_at: new Date(),
            updated_at: new Date(),
        };
        const ref = await db.collection('todos').add(data);
        const todo = await ref.get();
        response.status(201).send({ id: todo.id, ...todo.data() });
    } catch (error) {
        console.log("error ",error)
        response.status(500).send(error.message);
    }
});

export const getTodos = functions.https.onRequest(async (request:any, response:any) => {
    if (request.method !== "GET") {
        response.status(400).send('Please send a GET request');
        return;
    }
    try {
        const snapshot = await db.collection('todos').get();
        const todos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        response.status(200).send(todos);
    } catch (error) {
        console.log("error ",error)
        response.status(500).send(error.message);
    }
});

export const updateTodo = functions.https.onRequest(async (request:any, response:any) => {
    if (request.method !== "PATCH") {
        response.status(400).send('Please send a PUT request');
        return;
    }
    try {
        const { title, description, completed } = request.body;
        console.log("request.query ",request.query)
        const { id } = request.query;
        console.log("id ",id)
        const data = {
            title,
            description,
            completed,
            updated_at: new Date(),
        };
        await db.collection('todos').doc(id).set(data, { merge: true });
        const todo = await db.collection('todos').doc(id).get();
        response.status(200).send({ id: todo.id, ...todo.data() });
    } catch (error) {
        console.log("error ",error)
        response.status(500).send(error.message);
    }
});

export const deleteTodo = functions.https.onRequest(async (request:any, response:any) => {
    if (request.method !== "DELETE") {
        response.status(400).send('Please send a DELETE request');
        return;
    }
    try {
        const { id } = request.query;
        console.log("id ",id)
        await db.collection('todos').doc(id).delete();
        response.status(204).send();
    } catch (error) {
        console.log("error ",error)
        response.status(500).send(error.message);
    }
});
