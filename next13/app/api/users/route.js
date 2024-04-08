// 1nd way of defining routing handler, "created within the api/users folder" THIS IS STRONGLY RECOMMENDED
// http://localhost:3000/api/users

export async function GET(request) {
    //handle get request for /api/users
    //retrieve users from the database or any data source
    const users = [
        {
            id: 1,
            name: 'Twalibu Pembe'
        },
        {
            id: 2,
            name: 'Adam Pembe'
        },
        {
            id: 3,
            name: 'Hadija Pembe'
        },
    ];

    //send the users as a response
    return new Response(JSON.stringify(users))
}