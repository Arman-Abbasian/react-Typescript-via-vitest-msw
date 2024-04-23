import { http, HttpResponse } from 'msw';

export const handlers = [
    // http.get('https://dummyjson.com/todos', () => {
    //     return HttpResponse.json({
    //         "todos": [
    //             {
    //                 "id": 1,
    //                 "todo": "Do something nice for someone I care about",
    //                 "completed": true,
    //                 "userId": 26
    //             },
    //         ]
    //     }, { status: 200 })
    // }),

    // //---------------------------------------------------------------------
    // //json placeholder
    // http.get("https://jsonplaceholder.typicode.com/todos", () => {
    //     return HttpResponse.json({
    //         "todos": [
    //             {
    //                 "id": 1,
    //                 "todo": "quis ut nam facilis et officia qui",
    //                 "completed": true,
    //                 "userId": 26
    //             },
    //         ]
    //     }, { status: 200 })
    // }),

        //---------------------------------------------------------------------
    //json server
    http.get("http://localhost:4000/posts", () => {
        return HttpResponse.json({
            "posts": [
                {
                    "userId": 6,
                    "id": "53",
                    "title": "ut quo aut ducimus alias",
                    "body": "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique"
                    },
                    {
                    "userId": 6,
                    "id": "54",
                    "title": "sit asperiores ipsam eveniet odio non quia",
                    "body": "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"
                    },
            ]
        }, { status: 200 })
    }),
]